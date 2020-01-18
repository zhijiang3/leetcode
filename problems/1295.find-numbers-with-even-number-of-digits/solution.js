/**
 * @param {number[]} nums
 * @return {number}
 */
export default function findNumbers(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const bitLen = Math.floor(Math.log10(nums[i])) + 1;

    if ((bitLen & 1) === 0) {
      count++;
    }
  }

  return count;
}
