/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CadCreatorApp } from './app/CadCreatorApp';
import { DreamHouseCaseStudy } from './app/DreamHouseCaseStudy';

export function App() {
  const pathname = window.location.pathname;
  if (pathname === '/' || pathname.startsWith('/case-studies/dream-house')) return <DreamHouseCaseStudy />;
  const embedded = new URLSearchParams(window.location.search).get('presentation') === 'embedded';
  return <CadCreatorApp presentation={embedded ? 'embedded' : 'standalone'} />;
}

export default App;
