/**
 * @param {number} n
 * @return {boolean}
 */
export default function isHappy(n) {
  if (n <= 0) return false;

  const loopNumbers = [4, 16, 37, 58, 89, 145, 42, 20];

  while (n !== 1 && !loopNumbers.includes(n)) {
    let sum = 0;
    let a = n;
    while (a) {
      sum += Math.pow(a % 10, 2);
      a = (a / 10) | 0;
    }
    n = sum;
  }

  return n === 1;
}
