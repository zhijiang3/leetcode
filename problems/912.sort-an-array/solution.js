/**
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */
function partition(nums, start, end) {
  const pivot = nums[end];

  let left = start - 1;
  for (let i = start; i < end; ++i) {
    if (pivot >= nums[i]) {
      left = left + 1;
      swap(nums, left, i);
    }
  }

  swap(nums, left + 1, end);

  return left + 1;
}

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 */
function quickSort(nums, start, end) {
  if (start < end) {
    const mid = partition(nums, start, end);
    quickSort(nums, start, mid - 1);
    quickSort(nums, mid + 1, end);
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export default function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);

  return nums;
}
