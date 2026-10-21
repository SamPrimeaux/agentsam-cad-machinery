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

function DreamHouseProductionHero() {
  return <div className="dh-production-hero">
    <img src="/case-studies/dream-house/assets/v11-courtyard.jpg"
      alt="DreamHouse V1.1 Blender production model — rear courtyard, residences, roof composition, pool and grounds"
      loading="eager" />
    <div className="dh-production-hero-caption">
      <span>DREAMHOUSE / V1.1</span>
      <span>BLENDER PRODUCTION VIEW · WORK IN PROGRESS</span>
    </div>
  </div>;
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
        <div className="dh-hero-art"><DreamHouseProductionHero/></div>
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
      <section className="dh-gallery"><div className="dh-smallcaps">DREAMHOUSE V1.1 / CURRENT PRODUCTION VIEWS</div><div className="dh-gallery-grid">
        <CaseImage name="v11-arrival.jpg" caption="01 — DreamHouse V1.1 / arrival model view"/>
        <CaseImage name="v11-courtyard.jpg" caption="02 — DreamHouse V1.1 / courtyard and site model"/>
      </div><p className="dh-caption">These are Blender model views from the active DreamHouse V1.1 production scene; independent dimensional validation and BIM integration continue.</p></section>
      <section className="dh-last"><span>BUILT FOR THE WHOLE JOURNEY</span><h2>A design you can explore.<br/>A project you can carry forward.</h2><p>Continue into CAD Creator to edit the model. Authenticated project storage and machine execution remain under AgentSam's authorized runtime; the public studio does not grant access to private projects.</p><div className="dh-cta-row"><a className="dh-primary" href={STUDIO}>Launch public studio ↗</a><a className="dh-secondary" href={PLAT}>Open in AgentSam ↗</a></div></section>
    </main>
    <footer className="dh-footer"><span>AGENTSAM / SYSTEMATIC AUTONOMOUS MACHINERY</span><span>DREAM HOUSE · CASE STUDY</span><a href="https://github.com/SamPrimeaux/agentsam-cad-machinery">SOURCE ↗</a></footer>
  </div>;
}
