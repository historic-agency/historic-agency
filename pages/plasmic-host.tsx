import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import Head from 'next/head';
import { PLASMIC } from '../plasmic-init';

export default function Host() {
  return PLASMIC && (
    <div>
      <Head>
        <Script src="https://static1.plasmic.app/preamble.js" ></Script>
      </Head>
      <PlasmicCanvasHost />
    </div>
  );
}