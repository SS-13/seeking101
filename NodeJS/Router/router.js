var url = require("url");
var util = require("util");

function route(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Anout to route a request for " + pathname);

    if (pathname === "/") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello world");
        response.end();
    } else if (pathname === "/index/home") {
        response.writeHead(200, { "Content-Type": "text/plain" });

        response.end(util.inspect(url.parse(request.url, true)));
    } else {
        response.end("404");
    }
}

exports.route = route;
