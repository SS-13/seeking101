/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/

/**
 * 时间复杂度 O(n3)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum1 = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // 每个人
    for (let j = i + 1; j < nums.length - 1; j++) {
      // 依次拉上其他每个人
      for (let k = j + 1; k < nums.length; k++) {
        // 去问剩下的每个人
        if (nums[i] + nums[j] + nums[k] === 0) {
          // 我们是不是可以一起组队
          res.push ([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return res;
};

var threeSum2 = function (nums) {
  let res = [];
  let hash = {};
  for (let i = 0; i < nums.length - 2; i++) {
    // 每个人
    for (let j = i + 1; j < nums.length - 1; j++) {
      // 依次拉上其他每个人
      if (hash[nums[j]] !== undefined) {
        // 已经有合适自己的两人组
        res.push ([nums[j]].concat (hash[nums[j]]));
        hash[nums[j]] = undefined;
      } else {
        // 没有合适自己的两人组
        let mark = 0 - nums[i] - nums[j];
        hash[mark] = [nums[i], nums[j]];
      }
    }
  }
  return res;
}; // 示意代码 未AC

var threeSum3 = function (nums) {
  let res = [];
  nums.sort ((a, b) => a - b); // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
  for (let i = 1; i < nums.length - 1; i++) {
    // C位人选
    let first = 0;
    let last = nums.length - 1;
    do {
      let result = nums[i] + nums[first] + nums[last];
      if (result === 0) {
        // 如果可以组队
        res.push ([nums[i], nums[first], nums[last]]);
      }
      if (result <= 0 && first < i) {
        // 实力太弱，把菜鸟那边右移一位
        while (nums[first] === nums[++first]); // 如果相等就跳过
      } else if (result > 0 && last > i) {
        // 实力太强，把大神那边右移一位
        while (nums[last] === nums[--last]);
      } else {
        break; // 某一边已经没有人选了
      }
    } while (1);
    {
    }
  }
  return res;
}; // 示意代码 未AC

var threeSum4 = function (nums) {
  let res = [];
  let length = nums.length;
  nums.sort ((a, b) => a - b); // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
  if (nums[0] <= 0 && nums[length - 1] >= 0) {
    // 优化1: 整个数组同符号，则无解
    for (let i = 0; i < length - 2; ) {
      if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
      let first = i + 1;
      let last = length - 1;
      do {
        if (first >= last || nums[i] * nums[last] > 0) break; // 两人选相遇，或者三人同符号，则退出
        let result = nums[i] + nums[first] + nums[last];
        if (result === 0) {
          // 如果可以组队
          res.push ([nums[i], nums[first], nums[last]]);
        }
        if (result <= 0) {
          // 实力太弱，把菜鸟那边右移一位
          while (first < last && nums[first] === nums[++first]) {
          } // 如果相等就跳过
        } else {
          // 实力太强，把大神那边右移一位
          while (first < last && nums[last] === nums[--last]) {
          }
        }
      } while (first < last);
      while (nums[i] === nums[++i]) {
      }
    }
  }
  return res;
};

/**
 * 执行用时 :200 ms, 在所有 JavaScript 提交中击败了97.38%的用户
 * 内存消耗 :46.7 MB, 在所有 JavaScript 提交中击败了66.32%的用户
 * @param {*} nums 
 */
var threeSum = function (nums) {
  let ans = [];
  const len = nums.length;
  if (nums == null || len < 3) return ans;
  nums.sort ((a, b) => a - b); // 排序
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        ans.push ([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1])
          L++; // 去重
        while (L < R && nums[R] == nums[R - 1])
          R--; // 去重
        L++;
        R--;
      } else if (sum < 0) L++;
      else if (sum > 0) R--;
    }
  }
  return ans;
};

threeSum ([1, 2, -1, -2, 0, -1, 1]);
/*
[1, -1, 0]
[1, -2 , 1]
[2, -1, -1]
[2, 0, -2]
*/
