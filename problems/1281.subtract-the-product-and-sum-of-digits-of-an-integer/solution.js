/**
 * @param {number} n
 * @return {number}
 */
export default function subtractProductAndSum(n) {
  let sum = 0;
  let prod = 1;

  while (n) {
    let bit = n % 10;

    sum += bit;
    prod *= bit;

    n = (n / 10) | 0;
  }

  return prod - sum;
}
