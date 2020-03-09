/**
 * @param {number[]} prices
 * @return {number}
 */
export default function maxProfit(prices) {
  let max = 0;

  let min = prices[0];
  for (let p of prices) {
    if (p > min) {
      max = Math.max(max, p - min);
    } else {
      min = p;
    }
  }

  return max;
}
