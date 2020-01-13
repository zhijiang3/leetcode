/**
 * @param {number} x
 * @return {number}
 */
export default function mySqrt(x) {
  let n = x / 2;
  let check;

  do {
    n = (x / n + n) / 2;
    check = n * n - x;
  } while (Math.abs(check) > 0.01);

  return n | 0;
};