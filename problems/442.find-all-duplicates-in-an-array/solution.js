/**
 * @param {number[]} nums
 * @return {number[]}
 */
export default function findDuplicates(nums) {
  const res = [];

  for (let n of nums) {
    const i = Math.abs(n) - 1;

    if (nums[i] < 0) {
      res.push(Math.abs(n));
    } else {
      nums[i] = -nums[i];
    }
  }

  return res;
}
