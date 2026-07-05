import { CaptureUpdateAction } from "@excalidraw/element";

import { frameToolIcon } from "../components/icons";

import { register } from "./register";

export const actionTogglePortraitOutlineGuide = register({
  name: "portraitOutlineGuide",
  label: "labels.togglePortraitOutlineGuide",
  icon: frameToolIcon,
  viewMode: true,
  trackEvent: {
    category: "canvas",
    predicate: (appState) => !appState.portraitOutlineGuideEnabled,
  },
  keywords: ["portrait", "outline", "guide", "frame", "recording", "short"],
  perform(elements, appState) {
    return {
      appState: {
        ...appState,
        portraitOutlineGuideEnabled: !this.checked!(appState),
      },
      captureUpdate: CaptureUpdateAction.EVENTUALLY,
    };
  },
  checked: (appState) => appState.portraitOutlineGuideEnabled,
  predicate: (elements, appState, appProps, app) => {
    return app.editorInterface.formFactor !== "phone";
  },
});
