import { App } from "./app";
/// Importing t3d-lib registers globalThis.T3D, which the library uses internally.
import "t3d-lib";

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
