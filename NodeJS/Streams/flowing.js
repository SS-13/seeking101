const fs = require("fs");
const rs = fs.createReadStream("data.txt");
let data = "";

//自动流动flowing
// rs.on("data", (chunk) => {
//     console.log("读取chunk");
//     data += chunk;
// });

// rs.on("end", () => {
//     console.log("读取结束");
// });

// 手动模式
rs.on("readable", function () {
    let chunk = "";
    while ((chunk = rs.read()) !== null) {
        data += chunk;
    }
});

rs.on("end", () => {
    console.log("读取结束", data);
});
