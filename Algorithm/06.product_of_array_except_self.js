/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * 执行用时 :124 ms, 在所有 JavaScript 提交中击败了54.95%的用户
 * 内存消耗 :42.1 MB, 在所有 JavaScript 提交中击败了85.11%的用户
 * @param {number[]} nums 
 * @returns {number[]}
 */
var productExceptSelf = function (nums) {
  let res = [];

  // 上三角
  for (let i = 0, t = 1; i < nums.length; i++) {
    res[i] = t;
    t *= nums[i];
  }
  console.log (res);
  // 下三角
  for (let i = nums.length - 1, t = 1; i >= 0; i--) {
    res[i] *= t;
    t *= nums[i];
  }
  console.log (res);

  return res;
};

productExceptSelf ([1, 2, 3, 4]);
