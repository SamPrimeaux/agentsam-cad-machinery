import React, { useEffect } from 'react';
import storyboard from './beyond/chapters.json';
import sourceTemplate from './beyond/template.html?raw';
import './beyond/style.css';

/** Port of the preserved Beyond the Blueprint V1.4 seven-chapter source.
 * Presentation derivatives are not substitutes for editable CAD/BIM data.
 */
const esc = (value: unknown): string => String(value ?? '').replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const safeHeadline = (value: string) => esc(value)
  .replaceAll('&lt;em&gt;', '<em>').replaceAll('&lt;/em&gt;', '</em>')
  .replaceAll('&lt;span class=&quot;btb-dot&quot;&gt;', '<span class="btb-dot">')
  .replaceAll('&lt;/span&gt;', '</span>');

function renderChapters(): string {
  if (storyboard.chapters.length !== 7) throw new Error('Beyond storyboard requires seven chapters');
  return storyboard.chapters.map((item, index) => {
    if (!/^[a-z][a-z0-9-]*$/.test(item.id) || item.frame !== index) {
      throw new Error('Invalid Beyond chapter');
    }
    const heading = index ? 'h2' : 'h1';
    const cta = item.cta ? '<div class="btb-cta-row"><a class="' +
      (index === 0 || index === 6 ? 'btb-cta' : 'btb-inline-link') +
      '" href="' + (index === 0 ? '#' + storyboard.chapters[1].id : '#architectural-evidence') +
      '">' + esc(item.cta) + ' <span aria-hidden="true">↗</span></a></div>' : '';
    const technical = item.id === 'capability'
      ? '<div class="btb-technical-note"><span>ARCHITECTURAL LAYER</span><strong>Geometry → structure → material</strong><small>V1.2 conceptual model and source-backed drawings</small></div>' : '';
    const identity = item.id === 'understanding'
      ? '<aside class="btb-model-tag"><span>MODEL LINEAGE</span><strong>DreamHouse V1.2</strong><small>Conceptual GLB / BIM sources retained separately</small></aside>' : '';
    return '<section class="btb-chapter' + (index === 0 ? ' btb-chapter--first' : '') +
      '" id="' + item.id + '" data-chapter="' + index + '" data-scene-id="' + item.id +
      '" aria-labelledby="btb-title-' + (index + 1) + '"><div class="btb-chapter__inner"><div class="btb-copy"><' +
      heading + ' id="btb-title-' + (index + 1) + '">' + safeHeadline(item.headlineHtml) +
      '</' + heading + '><p class="btb-lede">' + esc(item.lede) + '</p>' + cta +
      '</div></div>' + technical + identity + '</section>';
  }).join('\n');
}
function renderProcessRungs(): string {
  const p = storyboard.process;
  return '<div class="btb-process"><div class="btb-process__head"><p class="btb-overline">' +
    esc(p.overline) + '</p><h3>' + esc(p.title) + '</h3><p>' + esc(p.intro) +
    '</p></div>' + p.rungs.map((item, index) => {
      const image = 'image' in item && item.image ? String(item.image) : '';
      const media = image
        ? '<figure><img src="/beyond/media/' + esc(image) + '" alt="' + esc('alt' in item ? item.alt : '') +
          '" loading="lazy" decoding="async"><figcaption>' + esc('caption' in item ? item.caption : '') +
          '</figcaption></figure>' : '';
      return '<article class="btb-rung' + (image ? '' : ' btb-rung--next') +
        '" id="rung-' + esc(item.id) + '"><div class="btb-rung__copy"><span class="btb-rung__index">' +
        String(index + 1).padStart(2, '0') + ' / ' + esc(item.version) +
        '</span><h3>' + esc(item.title) + '</h3><p class="btb-rung__lede">' + esc(item.lede) +
        '</p><dl><div><dt>What it is</dt><dd>' + esc(item.what) +
        '</dd></div><div><dt>Why it exists</dt><dd>' + esc(item.why) +
        '</dd></div><div><dt>What it produces</dt><dd>' + esc(item.produces) +
        '</dd></div></dl></div>' + media + '</article>';
    }).join('') + '</div>';
}
function renderEditorialMarkup(): string {
  const start = sourceTemplate.indexOf('<main id="main-content">');
  const end = sourceTemplate.lastIndexOf('</main>');
  if (start < 0 || end < start) throw new Error('Beyond source markup not found');
  return sourceTemplate.slice(start + '<main id="main-content">'.length, end)
    .replace('{{STORY_CHAPTERS}}', renderChapters())
    .replace('{{PROCESS_RUNGS}}', renderProcessRungs())
    .replace('{{EVIDENCE_STATUS}}', esc(storyboard.process.status))
    .replace(/<section class="btb-beyond"[\s\S]*?<\/section>/, '')
    .replaceAll('INNERANIMAL', 'AGENTSAM / CAD')
    .replace('href="https://inneranimalmedia.com/contact"', 'href="/studio"')
    .replace('Start with your idea', 'Open the design studio')
    .replaceAll('https://cad.inneranimalmedia.com/studio', '/studio');
}
const editorialMarkup = renderEditorialMarkup();

export function BeyondTheBlueprint() {
  useEffect(() => {
    document.body.classList.add('btb-body');
    document.title = 'Beyond the Blueprint | AgentSam CAD';
    const fonts = document.createElement('link');
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,400;9..144,500&display=swap';
    document.head.appendChild(fonts);
    // The existing gesture/story runtime owns the seven-chapter scene. The CAD
    // studio is still owned by the pinned SDK bundle at /studio.
    void import('./beyond/story.js');
    return () => {
      document.body.classList.remove('btb-body', 'btb-story-visible', 'btb-native-story', 'btb-no-webgl');
      document.documentElement.classList.remove('btb-locked');
      fonts.remove();
    };
  }, []);
  return <div className="btb-site">
    <header className="btb-cad-site-header">
      <a href="/" className="btb-cad-brand" aria-label="AgentSam CAD home"><strong>A</strong><span>AgentSam <em>/ CAD</em></span></a>
      <nav aria-label="CAD navigation">
        <a href="/case-studies/dream-house">DreamHouse</a>
        <a href="/#architectural-evidence">The work</a>
        <a className="btb-cad-studio-link" href="/studio">Open CAD Studio ↗</a>
      </nav>
    </header>
    <main id="main-content" dangerouslySetInnerHTML={{ __html: editorialMarkup }} />
  </div>;
}
