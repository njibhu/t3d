import Stats from "three/examples/jsm/libs/stats.module.js";
import AppRenderer from "./renderer";
import UI from "./ui";

const stats = new Stats();
$("body").append(stats.domElement);
$(stats.domElement).hide();
stats.toggle = () => $(stats.domElement).toggle();

const appRenderer = new AppRenderer(stats);
const ui = new UI(appRenderer);

ui.init();

// Allow user to access appRenderer
// This is not used by the app itself
globalThis.appRenderer = appRenderer;
globalThis.ui = ui;
globalThis.stats = stats;
