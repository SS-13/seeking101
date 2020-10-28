var server = require("./start.js");
var router = require("./router.js");

server.start(router.route);
