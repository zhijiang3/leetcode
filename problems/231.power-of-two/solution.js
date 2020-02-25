/**
 * @param {number} n
 * @return {boolean}
 */
export default function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
