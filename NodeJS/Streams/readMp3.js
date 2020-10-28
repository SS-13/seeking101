const fs = require("fs");

const rs = fs.createReadStream("demo.mp3");
const ws = fs.createWriteStream("copy1.mp3");

// rs.on("data", (chunk) => {
//     ws.write(chunk);
// });

// rs.on("end", () => {
//     ws.end();
// });

// pipe()
// 保证读写速度一致
// 只是可读流的方法
rs.pipe(ws);