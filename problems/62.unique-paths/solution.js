/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
export default function uniquePaths(m, n) {
  const f = [];

  for (let i = 0; i < m; i++) {
    f[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        f[i][j] = 1;
      } else {
        f[i][j] = f[i - 1][j] + f[i][j - 1];
      }
    }
  }

  return f[m - 1][n - 1];
}
