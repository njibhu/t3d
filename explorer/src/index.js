const AppRenderer = require("./renderer");
const UI = require("./ui");

const stats = new Stats();
$("body").append(stats.domElement);
$(stats.domElement).hide();
stats.toggle = () => $(stats.domElement).toggle();

const appRenderer = new AppRenderer(stats);
const ui = new UI(appRenderer);

ui.init();

// Allow user to access appRenderer
// This is not used by the app itself
global.appRenderer = appRenderer;
global.ui = ui;
global.stats = stats;
