/**
 * @param {string[][]} board
 * @return {number}
 */
export default function numRookCaptures(board) {
  let Rx, Ry; // 记录 R(白色车) 的位置
  for (let x = 0; x < 8; ++x) {
    for (let y = 0; y < 8; ++y) {
      if (board[x][y] === "R") {
        Rx = x;
        Ry = y;
        break;
      }
    }
  }

  // 东南西北方向向量
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  let ans = 0;
  let dRx, dRy;
  for (let i = 0; i < 4; ++i) {
    dRx = Rx;
    dRy = Ry;

    // 朝一个方向一直走，直到遇到停止的条件
    while (true) {
      dRx += dx[i];
      dRy += dy[i];

      if (!(dRx >= 0 && dRx < 8 && dRy >= 0 && dRy < 8)) break;
      if (board[dRx][dRy] === "B") break;
      if (board[dRx][dRy] === "p") {
        ans++;
        break;
      }
    }
  }

  return ans;
}
