/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

*/

/**
 * hash map
 * 执行用时 :84 ms, 在所有 JavaScript 提交中击败了96.98%的用户
 * 内存消耗 :36.4 MB, 在所有 JavaScript 提交中击败了71.38%的用户
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let sObj = {}, tObj = {};

  for (let i = 0, len = s.length; i < len; i++) {
    if (sObj[s[i]]) {
      sObj[s[i]] += 1;
    } else {
      sObj[s[i]] = 1;
    }

    if (tObj[t[i]]) {
      tObj[t[i]] += 1;
    } else {
      tObj[t[i]] = 1;
    }
  }

  let flag = true;
  for (k in sObj) {
    if (sObj[k] !== tObj[k]) {
      flag = false;
      break;
    }
  }

  return flag;
};

/**
 * sort 
 * 'abc','abc' => true 有问题
 * 执行用时 :128 ms, 在所有 JavaScript 提交中击败了54.53%的用户
 * 内存消耗 :38.6 MB, 在所有 JavaScript 提交中击败了28.30%的用户
 * @param {*} s 
 * @param {*} t 
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  return s.split ('').sort ().join ('') == t.split ('').sort ().join ('');
};
