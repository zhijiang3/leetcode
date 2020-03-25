/**
 * @param {number[][]} grid
 * @return {number}
 */
export default function surfaceArea(grid) {
  let rowSize = grid.length,
    colSize = grid[0].length;
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  let area = 0;
  for (let i = 0; i < rowSize; ++i) {
    for (let j = 0; j < colSize; ++j) {
      if (grid[i][j] > 0) area += 4 * grid[i][j] + 2;

      for (let l = 0; l < dx.length; ++l) {
        const di = i + dx[l];
        const dj = j + dy[l];

        if (di >= 0 && di < rowSize && dj >= 0 && dj < colSize) {
          area -= Math.min(grid[di][dj], grid[i][j]);
        }
      }
    }
  }
  return area;
}
