/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
export default function selfDividingNumbers(left, right) {
  const result = [];

  for (let n = left; n <= right; n++) {
    let i = n;
    while (i) {
      let bit = i % 10;
      if (bit === 0 || n % bit > 0) break;

      i = (i / 10) | 0;
    }
    if (i === 0) result.push(n);
  }

  return result;
}
