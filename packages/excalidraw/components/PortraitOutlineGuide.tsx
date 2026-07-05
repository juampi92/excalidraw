import React from "react";

import type { UIAppState } from "../types";

const PORTRAIT_RATIO = 9 / 16;
// vertical space reserved for the top toolbar and bottom footer controls
const TOP_OFFSET = 100;
const BOTTOM_OFFSET = 16;

export const PortraitOutlineGuide = ({
  appState,
}: {
  appState: Pick<UIAppState, "width" | "height">;
}) => {
  const availableHeight = Math.max(
    0,
    appState.height - TOP_OFFSET - BOTTOM_OFFSET,
  );
  const availableWidth = appState.width;

  let boxHeight = availableHeight;
  let boxWidth = boxHeight * PORTRAIT_RATIO;
  if (boxWidth > availableWidth) {
    boxWidth = availableWidth;
    boxHeight = boxWidth / PORTRAIT_RATIO;
  }

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: TOP_OFFSET,
        paddingBottom: BOTTOM_OFFSET,
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <div
        style={{
          width: boxWidth,
          height: boxHeight,
          border: "2px solid var(--color-primary)",
          borderRadius: 0,
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};
