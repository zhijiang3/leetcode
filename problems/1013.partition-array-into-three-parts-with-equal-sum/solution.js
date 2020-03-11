/**
 * @param {number[]} A
 * @return {boolean}
 */
export default function canThreePartsEqualSum(A) {
  let sum = 0;
  for (let n of A) {
    sum += n;
  }

  if (sum % 3 !== 0) return false;

  sum = sum / 3;

  let count = 0;
  let partSum = 0;
  for (let n of A) {
    partSum += n;

    if (partSum === sum) {
      count++;
      partSum = 0;
    }
  }

  return count >= 3;
}
