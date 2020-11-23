const AppRenderer = require("./renderer");
const UI = require("./ui");

const appRenderer = new AppRenderer();
const ui = new UI(appRenderer);

ui.init();

// Allow user to access appRenderer
// This is not used by the app itself
global.appRenderer = appRenderer;
