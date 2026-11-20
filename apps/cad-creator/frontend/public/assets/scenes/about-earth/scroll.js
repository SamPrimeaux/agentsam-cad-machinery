/* Scroll choreography for reusable About Earth sections (hero + culture + promise).
   Each placed section drives its own iamscene runtime; no global Earth controller. */
(function () {
  "use strict";

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Every placed About Earth section owns its scene and timeline. No global
  // window.EarthScene singleton or page-specific element IDs.
  document.querySelectorAll('[data-iam-about-earth]').forEach(function mountAboutEarth(section) {
  if (section.__iamEarthScrollCleanup) return;
  const heroIntro = section.querySelector('[data-earth-hero]');
  const culture = section.querySelector('[data-earth-culture]');
  const promise = section.querySelector('[data-earth-promise]');
  const closing = section.querySelector('[data-earth-closing]');
  const hint = section.querySelector('[data-earth-hint]');
  const stageBg = section.querySelector('[data-earth-stage-bg]');

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const seg = (p, a, b) => clamp((p - a) / (b - a), 0, 1);
  const lerp = (a, b, t) => a + (b - a) * t;
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  function isMobile() { return matchMedia("(max-width:860px)").matches; }
  if (isMobile()) section.classList.add("compact");

  // hero lifts away first; scene timeline starts slightly before hero fully exits
  const HERO_OUT0 = 0.02, HERO_OUT1 = 0.14, SCENE_START = 0.08;
  const sceneOf = (raw) => seg(raw, SCENE_START, 1.0);

  const CULTURE_IN = [0.10, 0.26];
  const CULTURE_OUT = [0.40, 0.54];
  const PROMISE_IN = [0.46, 0.60];
  const PROMISE_OUT = [0.76, 0.88];
  const CLOSE_IN = [0.84, 0.98];
  const HINT_OUT = [0.06, 0.16];

  function setHero(raw) {
    if (!heroIntro) return;
    const out = easeInOut(seg(raw, HERO_OUT0, HERO_OUT1));
    const mobile = isMobile();
    const y = -out * window.innerHeight * (mobile ? 0.10 : 0.14);
    const s = lerp(1, 0.975, out);
    heroIntro.style.opacity = (1 - out).toFixed(3);
    heroIntro.style.filter = out > 0.01 ? `blur(${(out * 5).toFixed(1)}px)` : "none";
    heroIntro.style.transform = `${mobile ? "translate(-50%,-50%)" : "translateY(-50%)"} translateY(${y.toFixed(1)}px) scale(${s.toFixed(3)})`;
    heroIntro.style.pointerEvents = out > 0.55 ? "none" : "auto";
  }

  function setPanel(el, p, winIn, winOut, fromSide) {
    if (!el) return;
    const m = isMobile();
    const inT = easeOut(seg(p, winIn[0], winIn[1]));
    const outT = easeInOut(seg(p, winOut[0], winOut[1]));
    const op = inT * (1 - outT);
    const blur = lerp(14, 0, easeOut(seg(p, winIn[0], winIn[0] + (winIn[1] - winIn[0]) * 0.65)));
    const slide = fromSide === "left"
      ? lerp(m ? 0 : -48, 0, inT) + outT * (m ? -18 : -36)
      : lerp(m ? 0 : 48, 0, inT) + outT * (m ? 18 : 36);
    const yLift = outT * -24;
    el.style.opacity = op.toFixed(3);
    el.style.filter = blur > 0.1 ? `blur(${blur.toFixed(1)}px)` : "none";
    el.style.transform = m
      ? `translate(-50%,calc(-50% + ${yLift.toFixed(1)}px))`
      : `translateY(calc(-50% + ${yLift.toFixed(1)}px)) translateX(${slide.toFixed(1)}px)`;
  }

  function setBg(p) {
    if (!stageBg) return;
    const t = easeInOut(seg(p, 0.08, 0.78));
    const glow = lerp(0.07, 0.13, t).toFixed(3);
    const shade = Math.round(lerp(21, 12, t));
    stageBg.style.background =
      `radial-gradient(ellipse 54% 64% at ${lerp(73, 62, t).toFixed(0)}% 48%, rgba(171,190,207,${glow}), transparent 72%),` +
      `radial-gradient(ellipse 36% 45% at 18% 78%, rgba(255,255,255,${lerp(0.025, 0.045, t).toFixed(3)}), transparent 76%),` +
      `linear-gradient(112deg, rgb(${shade},${shade},${shade + 4}) 0%, #0e0e12 58%, #09090c 100%)`;
  }

  function setClosing(p) {
    if (!closing) return;
    const r = easeOut(seg(p, CLOSE_IN[0], CLOSE_IN[1]));
    closing.style.opacity = r.toFixed(3);
    closing.style.transform = `translateX(-50%) translateY(${lerp(28, 0, r).toFixed(1)}px)`;
    closing.style.pointerEvents = r > 0.45 ? "auto" : "none";
  }

  function setHint(raw) {
    if (!hint) return;
    const out = easeInOut(seg(raw, HINT_OUT[0], HINT_OUT[1]));
    hint.style.opacity = (1 - out).toFixed(3);
  }

  let renderedP = 0;
  function apply(raw) {
    setHero(raw);
    const p = sceneOf(raw);
    setPanel(culture, p, CULTURE_IN, CULTURE_OUT, "left");
    setPanel(promise, p, PROMISE_IN, PROMISE_OUT, "right");
    setBg(p);
    setClosing(p);
    setHint(raw);
    const scene = section.iamEarthScene;
    if (scene?.ready) scene.setProgress(p);
    section.setAttribute("data-screen-label", "earth " + Math.round(raw * 100) + "%");
  }

  function targetProgress() {
    const rect = section.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    if (total <= 0) return 0;
    return clamp(-rect.top / total, 0, 1);
  }

  let raf = null;
  let lastFrameTime = null;
  function frame(now) {
    raf = null;
    const tp = targetProgress();
    const deltaMs = lastFrameTime == null ? 16 : Math.min(100, Math.max(0, now - lastFrameTime));
    lastFrameTime = now;
    // Time-based damping keeps the scene aligned with scroll on both fast and
    // slow devices; a fixed per-frame factor made low-FPS rendering lag behind.
    const alpha = reduceMotion ? 1 : 1 - Math.exp(-deltaMs / 72);
    renderedP += (tp - renderedP) * alpha;
    if (Math.abs(tp - renderedP) < 0.0004) renderedP = tp;
    apply(renderedP);
    if (Math.abs(tp - renderedP) > 0.0002) schedule();
  }
  function schedule() { if (raf == null) raf = requestAnimationFrame(frame); }

  const handleResize = () => {
    if (isMobile()) section.classList.add("compact");
    else section.classList.remove("compact");
    schedule();
  };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", handleResize);
  section.addEventListener('iam:earth-scene-ready', schedule);
  section.applyEarthSceneProgress = (p) => { renderedP = p; apply(p); };

  let observer = null;
  const cleanup = () => {
    if (raf != null) cancelAnimationFrame(raf);
    raf = null;
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", handleResize);
    section.removeEventListener('iam:earth-scene-ready', schedule);
    delete section.applyEarthSceneProgress;
    observer?.disconnect();
    section.__iamEarthScrollCleanup = null;
  };
  section.__iamEarthScrollCleanup = cleanup;
  observer = new MutationObserver(() => {
    if (!section.isConnected) cleanup();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });

  apply(0);
  schedule();
  });
})();
