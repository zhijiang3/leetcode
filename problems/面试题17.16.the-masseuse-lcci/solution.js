/**
 * @param {number[]} nums
 * @return {number}
 */
export default function massage(nums) {
  const dp = [];

  let ans = 0;
  for (let i = 0; i < nums.length; ++i) {
    dp[i] = Math.max(dp[i - 2] || 0, dp[i - 3] || 0) + nums[i];
    ans = Math.max(ans, dp[i]);
  }
  return ans;
}
