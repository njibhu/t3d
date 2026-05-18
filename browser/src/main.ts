import { App } from "./app";
/// Importing t3d-lib registers globalThis.T3D, which the library uses internally.
import T3D from "t3d-lib";
/// Side-effect import: installs the progress fan-out dispatcher.
import "./store/progress-bus";

/// Surface library errors/warnings in DevTools so renderer failures aren't silent.
T3D.Logger.logFunctions[T3D.Logger.TYPE_ERROR] = (...args: any[]) => console.error("[T3D]", ...args);
T3D.Logger.logFunctions[T3D.Logger.TYPE_WARNING] = (...args: any[]) => console.warn("[T3D]", ...args);

const root = document.getElementById("app");
if (!root) throw new Error("Missing #app root");

const app = new App(root);
app.init().catch((err) => {
  console.error(err);
  const msg = document.createElement("div");
  msg.style.cssText = "padding:20px;color:#ff8080;font-family:monospace;";
  msg.textContent = `Failed to initialise: ${(err as Error).message}`;
  root.appendChild(msg);
});
