/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
export default function myPow(x, n) {
  let ans = 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  while (n) {
    if (n & 1 === 1) ans = ans * x;

    x = x * x;
    n = n >>> 1;
  }

  return ans;
};
