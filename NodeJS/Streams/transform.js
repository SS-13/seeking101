const stream = require("stream");

const transform = stream.Transform({
    transform(chunk, encoding, cb) {
        //大小写字母转换，push缓冲区
        this.push(chunk.toString().toLowerCase());
    },
});

transform.write("D");

console.log(transform.read().toString());
