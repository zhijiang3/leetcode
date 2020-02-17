/**
 * @param {number} num
 * @return {number}
 */
export default function maximum69Number(num) {
  let n = num;
  let pow = 1;
  let add = 0;

  while (n) {
    if (n % 10 === 6) {
      add = 3 * pow;
    }

    pow = 10 * pow;
    n = (n / 10) | 0;
  }

  return add + num;
}
