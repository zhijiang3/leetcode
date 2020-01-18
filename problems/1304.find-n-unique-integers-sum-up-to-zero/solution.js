/**
 * @param {number} n
 * @return {number[]}
 */
export default function sumZero(n) {
  const result = [];

  // check if odd
  if ((n & 1) === 1) result.push(0);

  let count = 1;
  while (result.length < n) {
    result.push(count, -count);
    count++;
  }

  return result;
}
