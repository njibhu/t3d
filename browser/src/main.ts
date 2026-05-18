import T3D from "t3d-lib";
import { App } from "./app";
import { installProgressBus } from "./store/progress-bus";

installProgressBus();

// Library failures otherwise go to a `Logger.logFunctions` slot that defaults
// to a no-op, so they'd be silently swallowed without these wirings.
T3D.Logger.logFunctions[T3D.Logger.TYPE_ERROR] = (...args: any[]) => console.error("[T3D]", ...args);
T3D.Logger.logFunctions[T3D.Logger.TYPE_WARNING] = (...args: any[]) => console.warn("[T3D]", ...args);

const root = document.getElementById("app");
if (!root) throw new Error("Missing #app root");

new App(root).init().catch((err) => {
  console.error(err);
  const msg = document.createElement("div");
  msg.style.cssText = "padding:20px;color:#ff8080;font-family:monospace;";
  msg.textContent = `Failed to initialise: ${(err as Error).message}`;
  root.appendChild(msg);
});
