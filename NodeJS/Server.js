const http = require("http");

http.createServer(function (req, res) {
    // 定义http头
    res.writeHead(200, { "Content-Type": "text/plan" });

    // 发送数据
    res.end("Hello world! \n");
}).listen(8000);

// 服务运行之后输出信息
console.log("server is running...");
