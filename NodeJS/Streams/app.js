const fs = require("fs");
const rs = fs.createReadStream("data.txt", {
    encoding: "utf8",
    highWaterMark: 2 * 1024, //设置缓冲区大小
});
let data = "";
rs.on("open", function () {
    console.log("文件打开");
});

rs.on("close", function () {
    console.log("文件关闭");
});

rs.on("data", (chunk) => {
    console.log("读取chunk");
    data += chunk;
});

rs.on("end", () => {
    console.log("读取结束");
});
