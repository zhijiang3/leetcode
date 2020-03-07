/**
 * @param {number} target
 * @return {number[]}
 */
export default function findContinuousSequence(target) {
  const ans = [];

  let high = Math.ceil(target / 2);
  let low = high - 1;

  const sequence = new Array(high).fill(0).map((num, index) => index + 1);

  while (low > 0) {
    const sum = ((high - low + 1) * (low + high)) / 2;

    if (sum === target) {
      ans.unshift(sequence.slice(low - 1, high));
      low--;
      high--;
    } else if (sum > target) {
      high--;
    } else if (sum < target) {
      low--;
    }
  }

  return ans;
}
