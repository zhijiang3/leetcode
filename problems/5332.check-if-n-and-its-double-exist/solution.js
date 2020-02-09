/**
 * @param {number[]} arr
 * @return {boolean}
 */
export default function checkIfExist(arr) {
  const map = {};

  for (let n of arr) {
    if (map[n * 2] || map[n / 2]) return true;

    map[n] = true;
  }

  return false;
}
