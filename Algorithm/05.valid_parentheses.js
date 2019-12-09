/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true

*/

/**
 * 执行用时 :124 ms, 在所有 JavaScript 提交中击败了9.44%的用户
 * 内存消耗 :36.2 MB, 在所有 JavaScript 提交中击败了8.85%的用户
 * @param {*} s 
 * @returns {boolean}
 */
var isValid1 = function (s) {
  while (s.length) {
    var temp = s;
    s = s.replace ('()', '');
    s = s.replace ('[]', '');
    s = s.replace ('{}', '');
    if (s == temp) return false;
  }
  return true;
};

/**
 * 执行用时 :68 ms, 在所有 JavaScript 提交中击败了96.29%的用户
 * 内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了64.18%的用户
 * @param {*} s 
 * @returns {boolean}
 */
var isValid2 = function (s) {
  var map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  let temp = s.replace (/ /gi, '');

  var leftArr = [];
  for (var ch of temp) {
    if (ch in map) leftArr.push (ch);
    else {
      //为左括号时，顺序保存
      //为右括号时，与数组末位匹配
      if (ch != map[leftArr.pop ()]) return false;
    }
  }
  return !leftArr.length; //防止全部为左括号
};
