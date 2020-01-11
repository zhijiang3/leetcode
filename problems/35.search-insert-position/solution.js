/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export default function searchInsert(nums, target) {
  let low = 0;
  let high = nums.length;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return mid;
};
