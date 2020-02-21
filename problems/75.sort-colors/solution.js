/**
 * swap the value of i and j for arr
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  if (i === j) return;

  arr[i] ^= arr[j];
  arr[j] ^= arr[i];
  arr[i] ^= arr[j];
}

/**
 * @param {number[]} nums
 */
export default function sortColors(nums) {
  let low = 0;
  let high = nums.length - 1;
  let i = 0;

  while (i <= high) {
    if (nums[i] === 2) {
      swap(nums, i, high--);
    } else if (nums[i] === 0) {
      swap(nums, i++, low++);
    } else {
      i++;
    }
  }
}
