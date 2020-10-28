var util = require("util");
console.log("//////////////// isArray  ////////////////");
console.log(util.isArray([]));
console.log(util.isArray({}));
console.log("////////////////////////////////");

console.log("//////////////// isRegExp  ////////////////");
console.log(util.isRegExp(/some regexp/));

console.log("//////////////// isDate  ////////////////");
console.log(util.isDate(new Date()));

console.log("//////////////// isError  ////////////////");
console.log(util.isError(new Error()));

// underscore
