import T3D from "t3d-lib";
import { App } from "./app.js";
import { installProgressBus } from "./store/progress-bus.js";
import { toErrorMessage } from "./errors.js";

installProgressBus();

T3D.Logger.logFunctions[T3D.Logger.TYPE_ERROR] = (...args: unknown[]) => console.error("[T3D]", ...args);
T3D.Logger.logFunctions[T3D.Logger.TYPE_WARNING] = (...args: unknown[]) => console.warn("[T3D]", ...args);

const root = document.getElementById("app");
if (!root) {
  throw new Error("Missing #app root");
}

try {
  new App(root).init();
} catch (error) {
  console.error(error);
  const banner = document.createElement("div");
  banner.style.cssText = "padding:20px;color:#ff9c8f;font-family:monospace;";
  banner.textContent = `Failed to initialise explorer: ${toErrorMessage(error)}`;
  root.appendChild(banner);
}
