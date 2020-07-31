/********************************
每日算法一练
#001 二维数组查找

在一个二维数组中（每个一维数组的长度相同）,每一行都按照从左到右递增的顺序排序，
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

解题提示：二维数组是有序的比如下面的数组：

    1 2 3
    4 5 6
    7 8 9

可以直接利用左下角数字开始查找
大于： 比较上移
小于： 比较右移
********************************/

// eg

let arr1 = [
    [2, 3, 4],
    [1, 2, 3],
    [8, 9, 10],
];
let arr2 = [
    [8, 9, 10, 11],
    [1, 2, 3, 4],
    [-1, 0, 1, 2],
    [-6, -5, -4, -3],
];

let target = 3;
let target2 = 7;

/**
解法一：
将二维数组看作平面坐标系从左下角 (0, arr.length-1)开始比较
目标值大于坐标值 x坐标 +1
目标值小于坐标值 y坐标 -1
*/
const find = (array, target) => {
    console.time("find");
    // array.sort((a, b) => a[0] - b[0]);
    let i = array.length - 1; // y坐标
    let j = 0; // x坐标
    const result = compare(array, target, i, j);
    console.timeEnd("find");
    return result;
};

const compare = (array, target, i, j) => {
    if (array[i][j] === undefined || array[i] === undefined) {
        return false;
    }

    const temp = array[i][j];
    if (temp === target) {
        // 查到直接返回
        return true;
    } else if (temp > target) {
        return compare(array, target, i - 1, j);
    } else if (temp < target) {
        return compare(array, target, i, j + 1);
    }
};

/**
解法二：
二分查找的条件必须有序。和线性表的中点值进行比较，
如果小就继续在小的序列中查找，如此递归直到找到相同的值
const binarySearch = (data, arr, start, end) => {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);
    if (data === arr[mid]) {
        return mid;
    } else if (data < arr[mid]) {
        return binarySearch(data, arr, start, mid - 1);
    } else {
        return binarySearch(data, arr, mid + 1, end);
    }
};
*/

const findDichotomy = (array, target) => {
    console.time("findDichotomy");
    let result = false;
    let mid = 0;
    for (let i = 0; i < array.length; i++) {
        mid = Math.ceil((array[i].length - 1) / 2);
        result = binarySearch(array[i], target, mid);
        if (result) break;
    }

    console.timeEnd("findDichotomy");
    return result;
};
const binarySearch = (arr, target, mid) => {
    if (arr[mid] === target) return true;
    if (mid === 0 || mid > arr.length - 1) return false;
    if (arr[mid] > target) {
        // target在mid左侧
        let newMid = Math.floor(0.5 * mid);
        binarySearch(arr, target, newMid);
    } else {
        // target在右侧
        let newMid = Math.ceil(1.5 * mid);
        binarySearch(arr, target, newMid);
    }
    return false;
};

console.log(find(arr1, target), "arr1:target:find");
// console.log(find(arr2, target), "arr2:target:find");
// console.log(find(arr2, target2), "arr2:target2:find");
// console.log(find(arr2, target2), "arr2:target2:find");
console.log(findDichotomy(arr1, target), "arr1:target:findDichotomy");
// console.log(findDichotomy(arr2, target), "arr2:target:findDichotomy");
// console.log(findDichotomy(arr1, target2), "arr1:target2:findDichotomy");
// console.log(findDichotomy(arr2, target2), "arr2:target2:findDichotomy");
