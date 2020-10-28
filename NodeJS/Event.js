// 引入Event模块 创建 eventsEmitter对象
var events = require("events");
var eventEmitter = new events.EventEmitter();

// 绑定事件处理函数
var connectHandler = function connected() {
    console.log("connected被调用！");
};

eventEmitter.on("connection", connectHandler);

// 触发事件
eventEmitter.emit("connection");

console.log("程序执行完毕");
