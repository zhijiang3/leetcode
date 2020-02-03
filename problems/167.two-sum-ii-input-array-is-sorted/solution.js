/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export default function twoSum(numbers, target) {
  let low = 0;
  let high = numbers.length - 1;

  while (low < high) {
    if (numbers[low] + numbers[high] === target) {
      return [low + 1, high + 1];
    } else if (numbers[low] + numbers[high] > target) {
      high--;
    } else {
      low++;
    }
  }

  return [-1, -1];
}
