import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import Head from 'next/head';
import { PLASMIC } from '../plasmic-init';

export default function Host() {
  return PLASMIC && (
    <div>
      <Head>
        <script src="https://static1.plasmic.app/preamble.js" />
      </Head>
      <PlasmicCanvasHost />
    </div>
  );
}