import $ from "./jquery-global.js";

let w2uiLoadPromise;

export function ensureW2UI() {
  if (!w2uiLoadPromise) {
    w2uiLoadPromise = new Promise((resolve, reject) => {
      if (globalThis.w2ui && globalThis.w2popup) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = "./static/w2ui-1.4.3.min.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load w2ui script"));
      document.head.appendChild(script);
    });
  }

  return w2uiLoadPromise;
}

export default $;
