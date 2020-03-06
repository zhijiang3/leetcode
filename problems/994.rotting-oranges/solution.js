const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

/**
 * @param {number[][]} grid
 * @return {number}
 */
export default function orangesRotting(grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;
  const queue = [];
  const depth = {};

  let minutes = 0;
  let total = 0;

  for (let x = 0; x < rowLength; ++x) {
    for (let y = 0; y < colLength; ++y) {
      if (grid[x][y] === 2) {
        depth[`${x}-${y}`] = 0;
        queue.push([x, y]);
      }
      if (grid[x][y] === 1) total++;
    }
  }

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < rowLength && ny >= 0 && ny < colLength && grid[nx][ny] === 1) {
        grid[nx][ny] = 2;
        total--;
        queue.push([nx, ny]);
        depth[`${nx}-${ny}`] = depth[`${x}-${y}`] + 1;
        minutes = depth[`${nx}-${ny}`];
      }
    }
  }

  return total ? -1 : minutes;
}
