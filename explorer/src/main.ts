import T3D from "t3d-lib";
import { App } from "./app";
import { installProgressBus } from "./store/progress-bus";

installProgressBus();

const root = document.getElementById("app");
if (!root) throw new Error("Missing #app root");

const app = new App(root);

T3D.Logger.logFunctions[T3D.Logger.TYPE_ERROR] = (...args: unknown[]) => {
  app.reportLibraryError(args.map(String).join(" "));
};
T3D.Logger.logFunctions[T3D.Logger.TYPE_WARNING] = (...args: unknown[]) => {
  app.reportLibraryWarning(args.map(String).join(" "));
};

app.init().catch((err) => {
  console.error(err);
  const msg = document.createElement("div");
  msg.style.cssText = "padding:20px;color:#ff9d8f;font-family:ui-monospace,Consolas,monospace;";
  msg.textContent = `Failed to initialise: ${(err as Error).message}`;
  root.appendChild(msg);
});
