function BFS(board, x, y, n, m) {
  if (x < 0 || y < 0 || x > n - 1 || y > m - 1 || board[x][y] !== "O") return;

  board[x][y] = "#";

  BFS(board, x, y - 1, n, m);
  BFS(board, x - 1, y, n, m);
  BFS(board, x, y + 1, n, m);
  BFS(board, x + 1, y, n, m);
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export default function solve(board) {
  if (!board.length) return [];

  const n = board.length,
    m = board[0].length;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (i === 0 || j === 0 || i === n - 1 || j === m - 1) {
        BFS(board, i, j, n, m);
      }
    }
  }

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (board[i][j] === "#") {
        board[i][j] = "O";
      } else if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
}
