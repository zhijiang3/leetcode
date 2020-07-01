/**
 * @param {number} n
 * @return {number}
 */
export default function climbStairs(n) {
  const dp = [0, 1, 2];

  for (let i = 3; i <= n; ++i) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
}
