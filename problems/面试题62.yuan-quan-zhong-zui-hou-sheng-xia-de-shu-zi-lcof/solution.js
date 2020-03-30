/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
export default function lastRemaining(n, m) {
  let f = 0;

  for (let i = 2; i < n + 1; ++i) {
    f = (m + f) % i;
  }

  return f;
}
