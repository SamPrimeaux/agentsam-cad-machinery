import React, { useState } from 'react';
import './dream-house-case-study.css';
import media from '../../../shared/dreamhouse-case-study-media.json';

const STUDIO = '/studio';
const PLAT = 'https://agentsam.inneranimalmedia.com/cad';

const publishedMedia = media.assets;

function CaseImage({ assetId, caption, className = '' }: { assetId: string; caption: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const asset = publishedMedia.find(item => item.id === assetId);
  return (
    <figure className={'dh-image ' + className}>
      {asset && !failed &&
        <img src={asset.public_path} alt={asset.alt} loading="lazy" onError={() => setFailed(true)} />}
      {(!asset || failed) &&
        <div className="dh-unpublished"><span>ARCHITECTURAL VISUAL</span>
          <small>This schematic review image is temporarily unavailable.</small>
        </div>}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function DreamHouseProductionHero() {
  const cover = publishedMedia.find(item => item.id === 'courtyard-lookdev');
  return <div className="dh-production-hero">
    {cover && <img src={cover.public_path} alt={cover.alt} loading="eager" fetchPriority="high" />}
    <div className="dh-production-hero-caption">
      <span>DREAMHOUSE / CURRENT</span>
      <span>NATIVE BIM + EDITABLE SCENE · REVIEW ONLY</span>
    </div>
  </div>;
}

export function DreamHouseCaseStudy() {
  return <div className="dh-site">
    <header className="dh-header">
      <a className="dh-wordmark" href="/"><span className="dh-mark">A</span><span>AgentSam <em>/ CAD</em></span></a>
      <nav aria-label="Site navigation">
        <a href="#approach">The work</a><a href="#system">The system</a><a href="#interiors">Current scenes</a>
        <a className="dh-header-cta" href={STUDIO}>Open CAD Creator <span aria-hidden>↗</span></a>
      </nav>
    </header>
    <main>
      <section className="dh-hero">
        <div className="dh-meta"><span>CASE STUDY / 001</span><span>ARCHITECTURAL PRODUCTION</span><span>V1.6 — CURRENT REVIEW</span></div>
        <div className="dh-hero-intro"><div className="dh-eyebrow"><span className="dh-dot"/> FROM IDEA TO REAL SPACE</div>
          <h1>Architecture,<br/><i>made tangible.</i></h1>
          <p>One evolving architectural project: 142 validated native solids, a real FreeCAD/IFC source, a coordinated drawing set and new room-scale visual reviews. There is one model, not a separate house per version.</p>
          <a className="dh-primary" href={STUDIO}>Enter the design studio <span>↗</span></a>
        </div>
        <div className="dh-hero-art"><DreamHouseProductionHero/></div>
      </section>
      <section className="dh-intro" id="approach"><div className="dh-smallcaps">THE WORK / DREAM HOUSE</div>
        <div><h2>From a thought to<br/>a world you can enter.</h2><p>The brief begins with a four-bedroom residence, dedicated gym and game room, three-car garage, and an outdoor courtyard designed around a pool, fire lounge and entertaining spaces. The goal is to align the shell, pitched roofs, angled workshop, flat pool courtyard, and wraparound driveway within one evolving building model.</p></div>
      </section>
      <section className="dh-system" id="system"><div className="dh-system-head"><span>THE PRODUCTION SYSTEM</span><h2>Precision beneath.<br/><i>Freedom above.</i></h2></div>
        <div className="dh-system-grid">
          <article><span>01 / DESIGN INTENT</span><h3>See the possibility</h3><p>Reference imagery, architectural direction and the design decisions that define the character of the home.</p></article>
          <article><span>02 / DIMENSIONAL AUTHORITY</span><h3>Make it measurable</h3><p>Revisions, geometry, drawing sheets and BIM relationships coordinated from the current schematic BIM model, with unresolved details and approval gates visible.</p></article>
          <article><span>03 / EXPERIENCE</span><h3>Walk through the idea</h3><p>Scene assembly, interactive navigation, presentation frames and cinematic sequences that follow the same design.</p></article>
        </div>
      </section>
      <section className="dh-gallery" id="visuals">
        <div className="dh-smallcaps">DREAMHOUSE V1.5 / MODEL-DERIVED PRODUCTION VIEWS</div>
        <div className="dh-gallery-grid">
          <CaseImage assetId="courtyard" caption="01 — Courtyard and pool / level outdoor living"/>
          <CaseImage assetId="workshop" caption="02 — Angled workshop / glazed roll-up opening"/>
          <CaseImage assetId="roof-junction" caption="03 — Roof junction / connected wings"/>
          <CaseImage assetId="arrival" caption="04 — Arrival / paved site approach"/>
          <CaseImage assetId="aerial" caption="05 — Full house / V1.5 coordination model"/>
          <CaseImage assetId="top" caption="06 — Roof plan / aerial composition"/>
        </div>
        <p className="dh-caption">The exterior and technical media remain source-pinned to the verified native model and earlier schematic reviews; the new interior frames join this same current project. These are model renders, not photographs of a completed building.</p>
      </section>
      <section className="dh-gallery dh-gallery--interior" id="interiors">
        <div className="dh-smallcaps">THE CURRENT ENVIRONMENT / SOURCE-DERIVED VISUAL REVIEW</div>
        <div className="dh-gallery-grid">
          <CaseImage assetId="great-room" caption="09 — Great Room / current interior study"/>
          <CaseImage assetId="kitchen" caption="10 — Kitchen / material and daylight study"/>
          <CaseImage assetId="courtyard-lookdev" caption="11 — Courtyard / full architectural scene"/>
        </div>
        <p className="dh-caption">These frames were rendered from the existing DreamHouse Blender source and preserve all 142 design identities. The visual finishes are one project-owned look-development recipe, not approved material specifications or a second model.</p>
      </section>
      <section className="dh-gallery" id="drawings">
        <div className="dh-smallcaps">NATIVE BIM / SPRINT 1 IFC REVIEW</div>
        <div className="dh-gallery-grid">
          <CaseImage assetId="west-opening" caption="07 — Corrected west workshop roll-up opening / IFC-derived elevation"/>
          <CaseImage assetId="courtyard-levels" caption="08 — Courtyard, workshop slab, driveway / model-derived levels"/>
        </div>
        <p className="dh-caption">One source tracks 316 IFC products, 21 preserved spaces and 142 valid native solids. The workshop IFC double-cut is corrected in a verified candidate and the original FreeCAD workshop solid remains closed and valid. Native IFC promotion, material assignments, grading, engineering and owner approvals are still outstanding.</p>
      </section>
      <section className="dh-last"><span>BUILT FOR THE WHOLE JOURNEY</span><h2>A design you can explore.<br/>A project you can carry forward.</h2><p>Continue into CAD Creator to edit the model. Authenticated project storage and machine execution remain under AgentSam's authorized runtime; the public studio does not grant access to private projects.</p><div className="dh-cta-row"><a className="dh-primary" href={STUDIO}>Launch public studio ↗</a><a className="dh-secondary" href={PLAT}>Open in AgentSam ↗</a></div></section>
    </main>
    <footer className="dh-footer"><span>AGENTSAM / SYSTEMATIC AUTONOMOUS MACHINERY</span><span>DREAM HOUSE · CASE STUDY</span><a href="https://github.com/SamPrimeaux/dreamhouse">PROJECT SOURCE ↗</a></footer>
  </div>;
}
