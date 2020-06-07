/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
export default function findNumberIn2DArray(matrix, target) {
  if (!matrix.length) return false;

  let n = matrix.length,
    m = matrix[0].length;
  // 矩阵右上角
  let x = 0,
    y = m - 1;

  while (x < n && y >= 0) {
    if (matrix[x][y] > target) {
      // 当前位置比目标值要大，往左找
      y--;
    } else if (matrix[x][y] < target) {
      // 当前位置比目标值要小，往下找
      x++;
    } else {
      return true;
    }
  }

  return false;
}
