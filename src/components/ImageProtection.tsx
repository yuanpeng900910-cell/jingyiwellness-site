"use client";

import { useEffect } from "react";

export function ImageProtection() {
  useEffect(() => {
    const imageSelector = "img, picture, svg, image";

    function isImageEvent(event: Event) {
      return event.composedPath().some((node) => node instanceof Element && (
        node.matches(imageSelector) || getComputedStyle(node).backgroundImage.includes("url(")
      ));
    }

    function preventImageAction(event: Event) {
      if (isImageEvent(event)) event.preventDefault();
    }

    function preventImageCopy(event: ClipboardEvent) {
      const selection = window.getSelection();
      if (isImageEvent(event)) {
        event.preventDefault();
        return;
      }
      if (!selection) return;
      for (let index = 0; index < selection.rangeCount; index++) {
        if (selection.getRangeAt(index).cloneContents().querySelector(imageSelector)) {
          event.preventDefault();
          return;
        }
      }
    }

    // Delegation also covers images added by product dialogs and client navigation.
    document.addEventListener("contextmenu", preventImageAction, true);
    document.addEventListener("dragstart", preventImageAction, true);
    document.addEventListener("copy", preventImageCopy, true);
    return () => {
      document.removeEventListener("contextmenu", preventImageAction, true);
      document.removeEventListener("dragstart", preventImageAction, true);
      document.removeEventListener("copy", preventImageCopy, true);
    };
  }, []);

  return null;
}
