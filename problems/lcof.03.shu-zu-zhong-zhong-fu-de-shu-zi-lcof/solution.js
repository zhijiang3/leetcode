/**
 * @param {number[]} nums
 * @return {number}
 */
export default function findRepeatNumber(nums) {
  var repeat = new Array(nums.length).fill(0);

  for (let num of nums) {
    repeat[num]++;

    if (repeat[num] >= 2) return num;
  }

  return -1;
}
