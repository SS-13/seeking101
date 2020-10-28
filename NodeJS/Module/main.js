// 调用Hello模块
var Hello = require("./hello.js");

var hello = new Hello();
hello.setName("Sam");
hello.sayHello();
