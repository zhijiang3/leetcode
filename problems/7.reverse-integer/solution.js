/**
 * @param {number} x
 * @return {number}
 */
export default function reverse(x) {
  let num = 0;

  while (x) {
    num = 10 * num + (x % 10);

    if (num > 2147483647 || num < -2147483648) return 0;

    x = (x / 10) | 0;
  }

  return num;
}
