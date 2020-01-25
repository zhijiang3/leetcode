/**
 * @param {number[]} nums
 * @return {number}
 */
export default function maxProduct(nums) {
  let max = nums[0] || 0;
  let f = nums[0];
  let b = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];

    if (n < 0) {
      const tmp = f;
      f = b;
      b = tmp;
    }

    f = Math.max(f * n, n);
    b = Math.min(b * n, n);
    max = Math.max(max, f);
  }

  return max;
}
