import { guess } from "./helper";

/**
 * @param {number} n
 * @return {number}
 */
export default function guessNumber(n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const res = guess(mid);

    switch (res) {
      case -1:
        high = mid - 1;
        break;
      case 1:
        low = mid + 1;
        break;
      case 0:
        return mid;
    }
  }

  return -1;
}
