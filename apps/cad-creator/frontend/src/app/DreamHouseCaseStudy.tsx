import React, { useState } from 'react';
import './dream-house-case-study.css';

const STUDIO = '/studio';
const PLAT = 'https://agentsam.inneranimalmedia.com/cad';

function CaseImage({ name, caption, className = '' }: { name: string; caption: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className={'dh-image ' + className}>
      {!failed && <img src={'/case-studies/dream-house/assets/' + name} alt={caption} loading="lazy" onError={() => setFailed(true)} />}
      {failed && <div className="dh-unpublished"><span>ARCHITECTURAL VISUAL</span><small>Approved reference awaiting public asset publication</small></div>}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function DesignDiagram() {
  const wings = [
    { x: 0, w: 28, d: 26, label: 'GYM' },
    { x: 28, w: 90, d: 40, label: 'RESIDENCE' },
    { x: 118, w: 26, d: 30, label: 'LINK' },
    { x: 144, w: 40, d: 32, label: 'GARAGE' },
    { x: 184, w: 28, d: 30, label: 'GAME' }
  ];
  return (
    <svg className="dh-diagram" viewBox="-16 -12 244 75" role="img" aria-label="Schematic five-wing massing diagram with measured spans totaling 212 feet">
      <defs><pattern id="dh-grid" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M5 0H0V5" fill="none" stroke="#65727e" strokeWidth=".08" /></pattern></defs>
      <rect x="-16" y="-12" width="244" height="75" fill="url(#dh-grid)" />
      <path d="M0 -8H212M0 -8V-4M212 -8V-4" fill="none" stroke="#a0adaf" strokeWidth=".4" />
      <text x="106" y="-9.1" textAnchor="middle" fontSize="2.5" letterSpacing="1" fill="#d9dde0">212 FT · OVERALL SPAN</text>
      {wings.map(w=><g key={w.label}><rect x={w.x} y="0" width={w.w} height={w.d} fill="#2b363c" stroke="#b4b5a9" strokeWidth=".65"/><path d={`M${w.x} 0L${w.x+w.w} ${w.d}`} stroke="#67717a" strokeWidth=".22"/><text x={w.x+w.w/2} y={Math.max(8,w.d/2)} textAnchor="middle" fontSize={w.w===26?2.4:3.0} fontWeight="500" letterSpacing=".4" fill="#e0e6e6">{w.label}</text><text x={w.x+w.w/2} y={Math.max(8,w.d/2)+4} textAnchor="middle" fontSize="2.2" fill="#aab6b7">{w.w}' × {w.d}'</text></g>)}
      <rect x="66" y="39.2" width="20" height="13" rx=".2" stroke="#dcd1b8" strokeWidth=".65" fill="#53605e" />
      <text x="76" y="46.5" textAnchor="middle" fontSize="2.5" fill="#e6e4dd">ENTRY</text>
      <text x="107" y="58" textAnchor="middle" fontSize="2.8" fill="#b9bcbb" letterSpacing=".9">SCHEMATIC MASSING · DESIGN AUTHORITY SD-02</text>
    </svg>
  );
}

export function DreamHouseCaseStudy() {
  return <div className="dh-site">
    <header className="dh-header">
      <a className="dh-wordmark" href="/"><span className="dh-mark">A</span><span>AgentSam <em>/ CAD</em></span></a>
      <nav aria-label="Site navigation">
        <a href="#approach">The work</a><a href="#system">The system</a>
        <a className="dh-header-cta" href={STUDIO}>Open CAD Creator <span aria-hidden>↗</span></a>
      </nav>
    </header>
    <main>
      <section className="dh-hero">
        <div className="dh-meta"><span>CASE STUDY / 001</span><span>ARCHITECTURAL PRODUCTION</span><span>2026 — IN DEVELOPMENT</span></div>
        <div className="dh-hero-intro"><div className="dh-eyebrow"><span className="dh-dot"/> FROM IDEA TO REAL SPACE</div>
          <h1>Architecture,<br/><i>made tangible.</i></h1>
          <p>One architectural idea, traced from creative direction to measured drawings, intelligent geometry and an immersive world. Built through the machinery of AgentSam.</p>
          <a className="dh-primary" href={STUDIO}>Enter the design studio <span>↗</span></a>
        </div>
        <div className="dh-hero-art"><DesignDiagram/><div className="dh-art-footer"><span>FIVE INTERCONNECTED WINGS</span><span>01 / SPATIAL SYSTEM</span></div></div>
      </section>
      <section className="dh-intro" id="approach"><div className="dh-smallcaps">THE WORK / DREAM HOUSE</div>
        <div><h2>From a thought to<br/>a world you can enter.</h2><p>The brief begins with a four-bedroom residence, dedicated gym and game room, three-car garage, and an outdoor courtyard designed around a pool, fire lounge and entertaining spaces. The challenge is not simply to picture the house. It is to make every representation agree.</p></div>
      </section>
      <section className="dh-system" id="system"><div className="dh-system-head"><span>THE PRODUCTION SYSTEM</span><h2>Precision beneath.<br/><i>Freedom above.</i></h2></div>
        <div className="dh-system-grid">
          <article><span>01 / DESIGN INTENT</span><h3>See the possibility</h3><p>Reference imagery, architectural direction and the design decisions that define the character of the home.</p></article>
          <article><span>02 / DIMENSIONAL AUTHORITY</span><h3>Make it measurable</h3><p>Revisions, geometry, drawing sheets and BIM relationships coordinated from an approved project model.</p></article>
          <article><span>03 / EXPERIENCE</span><h3>Walk through the idea</h3><p>Scene assembly, interactive navigation, presentation frames and cinematic sequences that follow the same design.</p></article>
        </div>
      </section>
      <section className="dh-gallery"><div className="dh-smallcaps">VISUAL DIRECTION / SOURCE REFERENCES</div><div className="dh-gallery-grid">
        <CaseImage name="arrival-reference.jpg" caption="01 — Arrival / proposed architectural visual"/>
        <CaseImage name="courtyard-reference.jpg" caption="02 — Courtyard / proposed architectural visual"/>
      </div><p className="dh-caption">Reference imagery conveys design intent. It is not evidence of completed engineering or a constructed building.</p></section>
      <section className="dh-last"><span>BUILT FOR THE WHOLE JOURNEY</span><h2>A design you can explore.<br/>A project you can carry forward.</h2><p>Continue into CAD Creator to edit the model. Authenticated project storage and machine execution remain under AgentSam's authorized runtime; the public studio does not grant access to private projects.</p><div className="dh-cta-row"><a className="dh-primary" href={STUDIO}>Launch public studio ↗</a><a className="dh-secondary" href={PLAT}>Open in AgentSam ↗</a></div></section>
    </main>
    <footer className="dh-footer"><span>AGENTSAM / SYSTEMATIC AUTONOMOUS MACHINERY</span><span>DREAM HOUSE · CASE STUDY</span><a href="https://github.com/SamPrimeaux/agentsam-cad-machinery">SOURCE ↗</a></footer>
  </div>;
}
