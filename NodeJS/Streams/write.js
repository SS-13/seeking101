const fs = require("fs");

const ws = fs.createWriteStream("data2.txt");

ws.on("open", function () {
    console.log("文件打开");
});

ws.write("我是write写入的内容", "utf8");
ws.end();

ws.on("finish", function () {
    console.log("文件写入完成");
});

ws.on("close", function () {
    console.log("文件关闭");
});
