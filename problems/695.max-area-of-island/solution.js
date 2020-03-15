const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

/**
 * @param {number[][]} grid
 * @return {number}
 */
export default function maxAreaOfIsland(grid) {
  const rowSize = grid.length;
  const colSize = grid[0].length;

  let maxArea = 0;
  let area = 0;
  const stack = [];

  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 2;
        stack.push([i, j]);
        area = 1;
        while (stack.length) {
          const [x, y] = stack.pop();

          for (let w = 0; w < dx.length; w++) {
            const wx = dx[w] + x;
            const wy = dy[w] + y;

            if (wx >= 0 && wx < rowSize && wy >= 0 && wy < colSize && grid[wx][wy] === 1) {
              grid[wx][wy] = 2;
              stack.push([wx, wy]);
              area++;
            }
          }
        }

        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
}
