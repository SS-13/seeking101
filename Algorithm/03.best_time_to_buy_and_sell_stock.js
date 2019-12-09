/*
Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
Note that you cannot sell a stock before you buy one.

Example 1:
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function (prices) {
  let mProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    let temp = prices.slice (i);

    let pProfit = Math.max (temp) - temp[0];
    if (mProfit < pProfit) {
      mProfit = pProfit;
    }
  }
  return mProfit;
};

/**
 * 当日价格和之前最小价格的比对
 * 执行用时 :76 ms, 在所有 JavaScript 提交中击败了93.36%的用户
 * 内存消耗 :35.8 MB, 在所有 JavaScript 提交中击败了21.52%的用户
 * @param {*} prices 
 */
var maxProfit2 = function (prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfile = 0;
  for (let i = 0, len = prices.length; i < len; i++) {
    if (prices[i] <= minPrice) {
      minPrice = Math.min (minPrice, prices[i]);
    } else {
      maxProfile = Math.max (prices[i] - minPrice, maxProfile);
    }
  }
  return maxProfile;
};
