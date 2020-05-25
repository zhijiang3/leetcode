/**
 * @param {number[]} A
 * @return {number}
 */
export default function peakIndexInMountainArray(A) {
  let low = 0;
  let high = A.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (A[mid] < A[mid + 1]) low = mid + 1;
    else high = mid;
  }

  return low;
}
