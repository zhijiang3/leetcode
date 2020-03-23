/**
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */
function partition(arr, l, r) {
  const pivot = arr[r];

  let i = l - 1;
  for (let j = l; j <= r - 1; ++j) {
    if (pivot >= arr[j]) {
      i = i + 1;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, r);

  return i + 1;
}

/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */
function randomizedPartition(arr, l, r) {
  const i = Math.floor(Math.random() * (r - l) + l);

  swap(arr, i, r);

  return partition(arr, l, r);
}

/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 * @param {number} k
 */
function randomizedSelected(arr, l, r, k) {
  if (l >= r) return;

  const pos = randomizedPartition(arr, l, r);
  const num = pos - l + 1;

  if (num === k) return;
  else if (num > k) randomizedSelected(arr, l, pos - 1, k);
  else if (num < k) randomizedSelected(arr, pos + 1, r, k - num);
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
export default function getLeastNumbers(arr, k) {
  randomizedSelected(arr, 0, arr.length - 1, k);

  return arr.slice(0, k);
}
