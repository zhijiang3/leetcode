/**
 * @param {number[]} nums
 * @return {number}
 */
export default function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  const dp = new Array(nums.length);
  dp[0] = 1;

  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
    ans = Math.max(ans, dp[i]);
  }

  return ans;
}
