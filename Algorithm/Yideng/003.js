/********************************
每日算法一练
#003 排序数组查找

统计一个数字在排好序的数组中出现的次数
提示：本题有多种解法，试着分析哪种解法更好
********************************/

const sortedArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 55, 55, 63, 73];

const num1 = 1;
const num2 = 21;
const num3 = 55;

const findAmount = (arr, num) => {
    const combined = arr.join(",");
    const reg = new RegExp(`(^${num},|${num},$|${num},)`, "g");
    const matched = combined.match(reg);
    return matched;
};

console.log(findAmount(sortedArray, num1), "findAmount");
