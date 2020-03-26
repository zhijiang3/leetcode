/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
export default function hammingDistance(x, y) {
  let ans = 0;
  let n = x ^ y;

  while (n) {
    ans++;
    n &= n - 1;
  }

  return ans;
}
