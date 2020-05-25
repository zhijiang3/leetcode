/**
 * @param {number[]} nums
 * @return {number}
 */
export default function findPeakElement(nums) {
  let low = 0;
  let high = nums.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] < nums[mid - 1]) {
      high = mid;
    } else if (nums[mid] < nums[mid + 1]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}
