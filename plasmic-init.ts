import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Test from './components/Test';


export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "vyYbdQcN8b2R1Snftz4AzP",
      token: "eae34vVhe8Koj7FlLIUIpRtnQahA5l52Rh3auZeaR1pApTyOQQNtxpNPWU9uVLIUdHMc0G3qjc4WMF2iDl2mDg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

PLASMIC.registerComponent(Test, {
  name: 'Test',
  props: {
    name: 'string',
  }
});