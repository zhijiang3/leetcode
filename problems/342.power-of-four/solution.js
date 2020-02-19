/**
 * @param {number} n
 * @return {boolean}
 */
export default function isPowerOfFour(n) {
  return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
}
