import { createGestureStage, createWheelIntent } from './gesture-stage.js';

const root = document.getElementById('story');
const canvas = document.getElementById('btb-canvas');
const scenes = [...root.querySelectorAll('[data-chapter]')];
const evidence = document.getElementById('architectural-evidence');
const motionButton = document.getElementById('btb-motion');
const status = document.getElementById('btb-scene-status');
const indicator = document.getElementById('btb-chapter-indicator-text');
const indicatorFill = document.getElementById('btb-chapter-indicator-fill');
const live = document.getElementById('btb-stage-live');
const reducedMedia = matchMedia('(prefers-reduced-motion: reduce)');
const duration = 1100;
const nativeHash = location.hash.slice(1);
const initial = Math.max(0,scenes.findIndex(scene=>scene.id===nativeHash));
const prefersNative = () => reducedMedia.matches || userReduced;
let userReduced = false;
let mode = 'native';
let world = null, worldReady = false;
let lastWheelAt = 0, blockedUntilQuiet = false, lastFrame = 0;
let touchStart = null;
let quietTimer = 0;
let renderPending = false;
const matchesInput = element => Boolean(element?.closest?.(
  'input, textarea, select, [contenteditable], [role="textbox"], [data-gesture-native]'
));
const clamp=(n,min,max)=>Math.min(max,Math.max(min,n));
function sceneVisibility(current, incoming=null) {
  scenes.forEach((scene,i)=>{
    const visible=i===current||i===incoming;
    scene.classList.toggle('btb-scene-visible',visible);
    scene.inert=i!==(incoming??current);
    scene.setAttribute('aria-hidden',String(i!==(incoming??current)));
    scene.style.opacity=i===current?'1': '0';
    scene.style.pointerEvents=i===(incoming??current)?'auto':'none';
  });
}
function updateIndicator(index){
  if(indicator)indicator.textContent=String(index+1).padStart(2,'0')+' / '+String(scenes.length).padStart(2,'0');
  indicatorFill.style.width=((index+1)/scenes.length*100)+'%';
  live.textContent='Scene '+(index+1)+' of '+scenes.length+': '+scenes[index].querySelector('h1,h2')?.textContent;
}
function setHash(index){
  const id=scenes[index]?.id;
  if(location.hash.slice(1)===id)return;
  history.replaceState(history.state,'','#'+id);
}
function markActive(index,announce=true){
  sceneVisibility(index);
  updateIndicator(index);
  if(announce)setHash(index);
}
function drawWorld(progress,reduced=false){
  if(worldReady)world.render(progress,{elapsed:performance.now(),reducedMotion:reduced});
}
const sequence=createGestureStage({
  count:scenes.length,initial,duration,
  onFrame({from,to,p,worldProgress,textOut,textIn}){
    if(mode!=='locked')return;
    if(from!==to){
      const outgoing=scenes[from],incoming=scenes[to];
      if(p<.01) {
        sceneVisibility(from,to);
        outgoing.style.opacity='1';
        incoming.style.opacity='0';
      }else {
        outgoing.classList.add('btb-scene-visible');
        incoming.classList.add('btb-scene-visible');
        outgoing.style.opacity=String(textOut);
        incoming.style.opacity=String(textIn);
        outgoing.style.pointerEvents='none';
        incoming.style.pointerEvents=textIn>=.88?'auto':'none';
      }
    }
    drawWorld(worldProgress);
  },
  onSettled(index){
    if(mode!=='locked')return;
    markActive(index);
    // Inertial wheel tails must die down before accepting another chapter.
    blockedUntilQuiet=true;
  }
});
const wheel=createWheelIntent({
  threshold:40,
  onIntent(direction){
    if(mode==='locked'){
      if(sequence.transitioning)return;
      const next=sequence.index+(direction>0?1:-1);
      if(next<0)return;
      if(next>=scenes.length){release();return}
      blockedUntilQuiet=true;
      sequence.to(next);
    }
  }
});
function setChrome(show){
  document.body.classList.toggle('btb-story-visible',show);
}
function enterLock(index=sequence.index,updateUrl=true){
  if(prefersNative())return;
  mode='locked';
  root.dataset.stage='enabled';
  document.documentElement.classList.add('btb-locked');
  document.body.classList.remove('btb-native-story');
  window.scrollTo({top:0,left:0,behavior:'instant'});
  sequence.set(index);
  blockedUntilQuiet=true;
  lastWheelAt=performance.now();
  setChrome(true);
  markActive(index,updateUrl);
  drawWorld(index/(scenes.length-1));
}
function release({scrollToEvidence=true}={}){
  if(mode!=='locked')return;
  mode='released';
  document.documentElement.classList.remove('btb-locked');
  root.dataset.stage='released';
  setChrome(false);
  // The stage remains a single viewport, then content resumes native scroll.
  if(scrollToEvidence)requestAnimationFrame(()=>{
    evidence.scrollIntoView({behavior:'instant',block:'start'});
    history.replaceState(history.state,'','#architectural-evidence');
  });
}
function useNative({toEvidence=false}={}){
  if(mode==='native')return;
  mode='native';
  root.dataset.stage='native';
  document.documentElement.classList.remove('btb-locked');
  document.body.classList.add('btb-native-story');
  setChrome(false);
  scenes.forEach(scene=>{
    scene.inert=false;scene.removeAttribute('aria-hidden');
    scene.style.removeProperty('opacity');
    scene.style.removeProperty('pointer-events');
    scene.classList.add('btb-scene-visible');
  });
  if(toEvidence){
    requestAnimationFrame(()=>evidence.scrollIntoView({behavior:'instant'}));
  } else {
    requestAnimationFrame(()=>scenes[sequence.index].scrollIntoView({behavior:'instant',block:'start'}));
  }
  refreshNative();
}
function refreshNative(){
  if(mode!=='native')return;
  const viewport=window.innerHeight;
  let active=0,best=Number.POSITIVE_INFINITY;
  scenes.forEach((scene,i)=>{
    const rect=scene.getBoundingClientRect();
    const distance=Math.abs(rect.top-viewport*.12);
    if(distance<best){best=distance;active=i}
  });
  updateIndicator(active);
  drawWorld(active/(scenes.length-1),true);
}
function updateMotion(){
  const reduced=prefersNative();
  motionButton.setAttribute('aria-pressed',String(reduced));
  motionButton.innerHTML=reduced?'Enable cinematic chapters <span aria-hidden="true">▶</span>':'Reduce motion <span aria-hidden="true">Ⅱ</span>';
  motionButton.title=reduced?'Switch to time-driven chapter transitions':'Show the story with ordinary accessible scrolling';
}
function go(index){
  if(!Number.isInteger(index)||index<0||index>=scenes.length)return;
  if(mode==='locked'){
    if(sequence.transitioning)return;
    if(index===sequence.index)return;
    sequence.to(index);
  }else if(mode==='native'){
    scenes[index].scrollIntoView({behavior:'instant',block:'start'});
  }else {
    enterLock(index);
  }
}
function onWheel(event){
  if(mode==='native')return;
  if(event.ctrlKey||event.metaKey)return; // Preserve browser zoom/accessibility.
  const time=performance.now();
  const gap=time-lastWheelAt;
  lastWheelAt=time;
  if(mode==='released'){
    if(event.deltaY<0 && window.scrollY<=evidence.offsetTop+8){
      event.preventDefault();enterLock(scenes.length-1);
    }
    return;
  }
  if(mode!=='locked')return;
  if(matchesInput(event.target))return;
  event.preventDefault();
  if(sequence.transitioning){
    blockedUntilQuiet=true;
    return;
  }
  if(blockedUntilQuiet){
    if(gap<110)return;
    blockedUntilQuiet=false;
    wheel.reset();
  }
  wheel.ingest(event.deltaY,event.deltaMode);
}
function onKey(event){
  if(mode==='native'||matchesInput(event.target)||event.altKey||event.ctrlKey||event.metaKey)return;
  const k=event.key;
  if(mode==='released'){
    if((k==='ArrowUp'||k==='PageUp') && window.scrollY<=evidence.offsetTop+8){
      event.preventDefault();enterLock(scenes.length-1);
    }
    return;
  }
  if(mode!=='locked')return;
  if(!['ArrowDown','ArrowUp','PageDown','PageUp',' ','Home','End'].includes(k))return;
  event.preventDefault();
  if(sequence.transitioning)return;
  if(k==='Home'){go(0);return}
  if(k==='End'){go(scenes.length-1);return}
  const dir=(k==='ArrowUp'||k==='PageUp'||(k===' '&&event.shiftKey))?-1:1;
  const next=sequence.index+dir;
  if(next===scenes.length){release();return}
  go(Math.max(0,next));
}
function onTouchStart(event){
  if(mode!=='locked'||matchesInput(event.target)||event.touches.length!==1)return;
  touchStart={y:event.touches[0].clientY,time:performance.now()};
}
function onTouchMove(event){
  if(mode==='locked'&&touchStart&&event.cancelable)event.preventDefault();
}
function onTouchEnd(event){
  if(mode!=='locked'||!touchStart||sequence.transitioning)return;
  const finger=event.changedTouches[0];
  if(!finger)return;
  const distance=touchStart.y-finger.clientY;
  const delta=performance.now()-touchStart.time;
  touchStart=null;
  if(Math.abs(distance)<50 && !(Math.abs(distance)>25&&delta<180))return;
  const next=sequence.index+(distance>0?1:-1);
  if(next===scenes.length){release();return}
  go(clamp(next,0,scenes.length-1));
}
function onHash(){
  const hash=location.hash.slice(1);
  const found=scenes.findIndex(scene=>scene.id===hash);
  if(found>=0){if(mode==='native')scenes[found].scrollIntoView();else enterLock(found,false)}
  else if(hash==='architectural-evidence'){
    if(mode==='locked')release();else evidence.scrollIntoView({behavior:'instant'});
  }
}
async function initializeWorld(){
  try{
    if(!canvas.getContext('webgl2',{alpha:true,antialias:true})){
      document.body.classList.add('btb-no-webgl');
      status.textContent='Architectural stills';return;
    }
    const {createBeyondWorld}=await import('./world.js');
    world=createBeyondWorld(canvas,{onState(info){
      if(info.type==='loaded')status.textContent='V1.2 source · '+info.count.toLocaleString()+' elements';
      if(info.type==='loading')status.textContent='Loading V1.2 model';
      if(info.type==='error')status.textContent='Model imagery available below';
    }});
    worldReady=true;
    status.textContent='Illustrative clay world';
    drawWorld(sequence.index/(scenes.length-1),prefersNative());
    const tick=(time)=>{
      if(!worldReady)return;
      if(time-lastFrame>=50 && !document.hidden && mode==='locked' && !sequence.transitioning){
        lastFrame=time;drawWorld(sequence.index/(scenes.length-1));
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }catch(error){
    console.error('Unable to initialize editorial scene',error);
    document.body.classList.add('btb-no-webgl');
    status.textContent='Architectural stills';
  }
}
function init(){
  updateMotion();
  if(prefersNative()){
    mode='released';useNative({toEvidence:nativeHash==='architectural-evidence'});
  }else if(nativeHash==='architectural-evidence'){
    mode='released';
    root.dataset.stage='released';
    setChrome(false);
    requestAnimationFrame(()=>evidence.scrollIntoView({behavior:'instant'}));
  }else enterLock(initial,false);
  window.addEventListener('wheel',onWheel,{passive:false});
  window.addEventListener('keydown',onKey);
  window.addEventListener('touchstart',onTouchStart,{passive:true});
  window.addEventListener('touchmove',onTouchMove,{passive:false});
  window.addEventListener('touchend',onTouchEnd,{passive:true});
  window.addEventListener('hashchange',onHash);
  window.addEventListener('resize',()=>{if(mode==='native')refreshNative();else drawWorld(sequence.index/(scenes.length-1),prefersNative())});
  window.addEventListener('scroll',refreshNative,{passive:true});
  motionButton.addEventListener('click',()=>{
    userReduced=!userReduced;
    updateMotion();
    if(prefersNative())useNative({toEvidence:mode==='released'});
    else if(mode==='native'){
      const nearest=clamp(Math.round(window.scrollY/Math.max(1,window.innerHeight)),0,scenes.length-1);
      enterLock(nearest);
    }
  });
  reducedMedia.addEventListener?.('change',()=>{
    updateMotion();
    if(prefersNative())useNative({toEvidence:mode==='released'});
    else if(mode==='native')enterLock(sequence.index);
  });
  root.addEventListener('click',event=>{
    const a=event.target.closest?.('a[href^="#"]');
    if(!a)return;
    const hash=a.hash.slice(1);
    const target=scenes.findIndex(scene=>scene.id===hash);
    if(target>=0){
      event.preventDefault();go(target);
    }else if(hash==='architectural-evidence'){
      event.preventDefault();
      if(mode==='locked')release();
      else evidence.scrollIntoView({behavior:'instant'});
    }
  });
  initializeWorld();
}
init();
