// 移动向量
const dx = [0, -1, 1, -1, 1, 1, 0, -1];
const dy = [-1, 0, -1, 1, 0, 1, 1, -1];

/**
 * @param {string[][]} board
 * @param {number} x
 * @param {number} y
 */
function DFS(board, x, y) {
  const n = board.length,
    m = board[0].length;
  const block = board[x][y];

  switch (block) {
    case "E":
      // 查看周围是否有炸弹
      let count = 0;
      for (let i = 0; i < dx.length; ++i) {
        const ix = dx[i] + x,
          iy = dy[i] + y;

        if (ix >= 0 && ix < n && iy >= 0 && iy < m && board[ix][iy] === "M") count++;
      }

      // 有炸弹
      if (count > 0) {
        board[x][y] = `${count}`;
      } else {
        // 没有炸弹
        board[x][y] = "B"; // Pending

        // 递归更新空方块
        for (let i = 0; i < dx.length; ++i) {
          const ix = dx[i] + x,
            iy = dy[i] + y;

          if (ix >= 0 && ix < n && iy >= 0 && iy < m && board[ix][iy] === "E") {
            DFS(board, ix, iy);
          }
        }
      }
      break;
    case "M":
      board[x][y] = "X";
      break;
  }
}

/**
 * @param {string[][]} board
 * @param {number[]} click
 * @return {string[][]}
 */
export default function updateBoard(board, click) {
  DFS(board, click[0], click[1]);

  return board;
}
