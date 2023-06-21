// const { config } = require("./vedla-conf.json");
// import VedlaLogger from "./utils/Log.js";
import VedlaJS from "./VedlaJS.js";
import VedlaLogger from "./utils/VedlaLogger.js";

// console.log(config);
const logTest = "Hello World!";
new VedlaJS().dump(logTest);
new VedlaJS().dump(logTest, "warn");
new VedlaJS().dump(logTest, "error");
new VedlaJS().dump(logTest, "info");
// new VedlaJS().dd(logTest);
