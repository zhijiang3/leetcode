/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
export default function countPrimeSetBits(L, R) {
  let count = 0;

  while (L <= R) {
    let n = L;
    let zeroCount = 0;
    while (n) {
      zeroCount++;
      n = n & (n - 1);
    }

    switch (zeroCount) {
      case 2:
      case 3:
      case 5:
      case 7:
      case 11:
      case 13:
      case 17:
      case 19:
        count++;
        break;
    }

    L++;
  }

  return count;
}
