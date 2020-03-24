/**
 * @param {number[]} A
 * @return {number}
 */
export default function minIncrementForUnique(A) {
  const count = new Array(80000).fill(0);

  for (let n of A) count[n]++;

  let ans = 0,
    taken = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 1) {
      taken += count[i] - 1;
      ans -= i * (count[i] - 1);
    } else if (taken > 0 && count[i] === 0) {
      taken--;
      ans += i;
    }
  }

  return ans;
}
