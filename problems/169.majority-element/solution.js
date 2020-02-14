/**
 * @param {number[]} nums
 * @return {number}
 */
export default function majorityElement(nums) {
  let count = 0;
  let ans;

  for (let n of nums) {
    if (count === 0) ans = n;

    count += ans === n ? 1 : -1;
  }

  return ans;
}
