/**
 * @param {number[]} nums
 * @return {number}
 */
export default function findUnsortedSubarray(nums) {
  const sortedNums = nums.slice().sort((a, b) => a - b);

  let min = nums.length;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sortedNums[i] !== nums[i]) {
      min = Math.min(min, i);
      max = Math.max(max, i);
    }
  }

  return max - min > 0 ? max - min + 1 : 0;
}
