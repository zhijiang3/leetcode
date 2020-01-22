/**
 * @param {number[]} nums
 * @return {boolean}
 */
export default function canJump(nums) {
  if (nums.length === 1) return true;

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (max >= i) {
      max = Math.max(max, nums[i] + i);
    } else {
      return false;
    }
  }

  return true;
}
