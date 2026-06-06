import $ from "jquery";
import Stats from "three/examples/jsm/libs/stats.module.js";
import AppRenderer from "./renderer";
import UI from "./ui";

const stats = new Stats();
stats.showPanel(0);
$("body").append(stats.domElement);
stats.isVisible = false;
stats.show = () => {
  stats.showPanel(0);
  stats.isVisible = true;
  $(stats.domElement).show();
};
stats.hide = () => {
  stats.isVisible = false;
  $(stats.domElement).hide();
};
stats.toggle = () => {
  if (stats.isVisible) {
    stats.hide();
  } else {
    stats.show();
  }
};
stats.hide();

const appRenderer = new AppRenderer(stats);
const ui = new UI(appRenderer);

ui.init();

// Allow user to access appRenderer
// This is not used by the app itself
globalThis.appRenderer = appRenderer;
globalThis.ui = ui;
globalThis.stats = stats;
