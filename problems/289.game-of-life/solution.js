// 方向数组
const dx = [-1, 0, 1, 1, 1, 0, -1, -1];
const dy = [-1, -1, -1, 0, 1, 1, 1, 0];

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export default function gameOfLife(board) {
  const m = board.length,
    n = board[0].length;

  let live, x1, y1;
  for (let x = 0; x < m; ++x) {
    for (let y = 0; y < n; ++y) {
      // 获取周围活细胞数量
      live = 0;
      for (let i = 0; i < dx.length; ++i) {
        x1 = x + dx[i];
        y1 = y + dy[i];
        if (x1 >= 0 && x1 < m && y1 >= 0 && y1 < n) {
          if (Math.abs(board[x1][y1]) === 1) live++;
        }
      }

      if (board[x][y] === 1) {
        // 周围活细胞过多，当前细胞死亡
        if (live <= 1 || live >= 4) board[x][y] = -1;
      } else {
        // 周围只有 3 个活细胞，当前细胞复活
        if (live === 3) board[x][y] = 2;
      }
    }
  }

  for (let x = 0; x < m; ++x) {
    for (let y = 0; y < n; ++y) {
      board[x][y] = board[x][y] > 0 ? 1 : 0;
    }
  }
}
