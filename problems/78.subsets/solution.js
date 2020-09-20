/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export default function subsets(nums) {
  const ans = [];
  const n = nums.length;
  for (let i = 0; i < 1 << n; ++i) {
    const subset = [];
    for (let j = 0; j < n; ++j) {
      if (i & (1 << j)) subset.push(nums[j]);
    }
    ans.push(subset);
  }
  return ans;
}
