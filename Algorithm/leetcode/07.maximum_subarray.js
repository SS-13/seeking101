/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

*/

/**
 * 执行用时 :96 ms, 在所有 JavaScript 提交中击败了32.76%的用户
 * 内存消耗 :36.5 MB, 在所有 JavaScript 提交中击败了5.01%的用户
 * @param {*} nums 
 */
var maxSubArray1 = function (nums) {
  let ans = nums[0];
  let sum = 0;
  for (const num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    ans = Math.max (ans, sum);
  }
  return ans;
};

let r = maxSubArray ([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log (r);

// Kadane算法扫描一次整个数列的所有数值，
// 在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。
// 该子数列由两部分组成：以前一个位置为结束点的最大子数列、该位置的数值。
// 因为该算法用到了“最佳子结构”（以每个位置为终点的最大子数列都是基于其前一位置的最大子数列计算得出,
// 该算法可看成动态规划的一个例子。
// 状态转移方程：sum[i] = max{sum[i-1]+a[i],a[i]}
// 其中(sum[i]记录以a[i]为子序列末端的最大序子列连续和)
/**
 * 执行用时 :60 ms, 在所有 JavaScript 提交中击败了99.79%的用户
 * 内存消耗 :35.6 MB, 在所有 JavaScript 提交中击败了17.03%的用户
 * @param {*} nums 
 */
function maxSubArray2 (nums) {
  if (!nums.length) {
    return;
  }
  // 在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。
  let max_ending_here = nums[0];
  let max_so_far = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // 以每个位置为终点的最大子数列 都是基于其前一位置的最大子数列计算得出,

    max_ending_here = Math.max (nums[i], max_ending_here + nums[i]);
    max_so_far = Math.max (max_so_far, max_ending_here);
  }

  return max_so_far;
}
