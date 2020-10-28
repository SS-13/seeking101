const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filename = path.resolve(__dirname, "log.txt");

const readStream = fs.createReadStream(filename);

let num = 0;
// 创建readline对象
const readL = readline.createInterface({
    // 输入
    input: readStream,
});

readL.on("line", (line) => {
    if (line.indexOf("127.0.0.0") >= 0) {
        num++;
    }
    console.log(line);
});

readL.on("close", function () {
    console.log("读取完成", num);
});
