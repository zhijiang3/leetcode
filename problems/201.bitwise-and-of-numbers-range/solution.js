/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
export default function rangeBitwiseAnd(m, n) {
  while (m < n) {
    n &= n - 1;
  }

  return n;
}
