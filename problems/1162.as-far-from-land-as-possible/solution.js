const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

/**
 * @param {number[][]} grid
 * @return {number}
 */
export default function maxDistance(grid) {
  const n = grid.length;

  const queue = [];
  for (let x = 0; x < n; ++x) {
    for (let y = 0; y < n; ++y) {
      // 添加所有的陆地，设置距离为 0
      if (grid[x][y] === 1) queue.push([x, y, 0]);
    }
  }

  let ans = -1;
  while (queue.length) {
    const [x, y, distance] = queue.shift();
    // 如果有找到海洋，则找最大的那个
    if (distance !== 0) ans = Math.max(ans, distance);

    // 往陆地的上下左右方向走，只要找到海洋，就根据标记并设置 距离为当前陆地 + 1
    for (let i = 0; i < dx.length; ++i) {
      const x1 = x + dx[i];
      const y1 = y + dy[i];
      if (x1 >= 0 && x1 < n && y1 >= 0 && y1 < n && grid[x1][y1] === 0) {
        queue.push([x1, y1, distance + 1]);
        grid[x1][y1] = 1;
      }
    }
  }
  return ans;
}
