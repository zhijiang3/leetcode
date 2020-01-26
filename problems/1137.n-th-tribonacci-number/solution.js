/**
 * @param {number} n
 * @return {number}
 */
export default function tribonacci(n) {
  const f = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 3] + f[i - 2] + f[i - 1];
  }

  return f[n];
}
