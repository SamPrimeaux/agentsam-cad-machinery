/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CadCreatorApp } from './app/CadCreatorApp';
import { DreamHouseCaseStudy } from './app/DreamHouseCaseStudy';
import {CadStandaloneShell} from './app/CadStandaloneShell';

export function App() {
  const pathname = window.location.pathname;
  if (pathname === '/' || pathname.startsWith('/case-studies/dream-house')) return <DreamHouseCaseStudy />;
  const embedded = new URLSearchParams(window.location.search).get('presentation') === 'embedded';
  return embedded ? <CadCreatorApp presentation="embedded"/> : <CadStandaloneShell/>;
}

export default App;
