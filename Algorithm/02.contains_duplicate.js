/*
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:
Input: [1,2,3,1]
Output: true

Example 2:
Input: [1,2,3,4]
Output: false

Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate1 = function (nums) {
  let result = {};
  for (let i = 0; i < nums.length; i++) {
    if (!!result[nums[i]]) {
      return true;
    } else {
      result[nums[i]] = 1;
    }
  }
  return false;
};

/**
 * set取重，比对长度
 * @param {*} nums 
 * @returns {boolean}
 */
var containsDuplicate2 = function (nums) {
  return nums.length !== new Set (nums).size;
};
