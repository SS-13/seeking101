/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

const twoSum1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        console.log (i, j);
        result = [i, j];
        return [i, j];
      }
    }
  }
  return [];
};

var twoSum2 = function (nums, target) {
  const map = new Map ();
  for (let i = 0; i < nums.length; i++) {
    const otherIndex = map.get (target - nums[i]);
    if (otherIndex !== undefined) return [otherIndex, i];
    map.set (nums[i], i);
  }
};

var twoSum3 = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] >= 0) {
      return [map[target - nums[i]], i];
    }
    map[nums[i]] = i;
  }
};
