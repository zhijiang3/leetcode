/**
 * @param {number[]} nums
 * @return {number}
 */
export default function firstMissingPositive(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = Number(nums[i]);
    if (num < 1 || num > nums.length) continue;

    nums[num - 1] = String(nums[num - 1]);
  }

  for (let j = 0; j < nums.length; j++) {
    if (typeof nums[j] !== "string") return j + 1;
  }

  return nums.length + 1;
}
