const fs = require("fs");
const zlib = require("zlib");

// data.txt.gz

fs.createReadStream("data.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("data.txt.gz"));

console.log("finish");
