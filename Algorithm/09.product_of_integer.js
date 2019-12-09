/*
一个整数可以被分解为多个整数的乘积，
例如，6 可以分解为 2x3。
请使用递归编程的方法，
为给定的整数 n，找到所有可能的分解（1 在解中最多只能出现 1 次）。

例如，输入 8，输出是可以是 1x8, 8x1, 2x4, 4x2, 1x2x2x2, 1x2x4, ……

*/

let product = 1;
let result = [];

function productInteger (number, factor = 1) {
  if (number === 0 || number === 1 || number === -1) {
    console.log (number.toString ());
    return false;
  }

 
}

// productInteger(-1);
// productInteger(1);
// productInteger(0);

productInteger (4);

// const testNum = 3
// for(let i=1; i<testNum.length; i++){
//     product = i;
//     result = [];
//     productInteger(testNum)

// }
