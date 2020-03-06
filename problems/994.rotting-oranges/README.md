# Rotting Oranges

> 题目地址: [https://leetcode-cn.com/problems/rotting-oranges/](https://leetcode-cn.com/problems/rotting-oranges/)

## 题目描述

在给定的网格中，每个单元格可以有以下三个值之一：

* 值 0 代表空单元格；
* 值 1 代表新鲜橘子；
* 值 2 代表腐烂的橘子。

每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。

返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 `-1`。

示例 1：

![oranges](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/16/oranges.png)

```
输入：[[2,1,1],[1,1,0],[0,1,1]]
输出：4
```

示例 2：

```
输入：[[2,1,1],[0,1,1],[1,0,1]]
输出：-1
解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。
```

示例 3：

```
输入：[[0,2]]
输出：0
解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
```

提示：

* `1 <= grid.length <= 10`
* `1 <= grid[0].length <= 10`
* `grid[i][j]` 仅为 `0`、`1` 或 `2`

------

## 题解

### 多源广度优先搜索

对于一开始的腐烂橘子，**在广度优先搜索中，它们都是在同一层上的，也就是题目中的同一分钟**。

而过了一分钟后，第一层的腐烂橘子会把相邻的新鲜橘子腐烂，此时相邻的新鲜橘子可知是第二层（因为是由第一层腐烂的），然后第二层被腐烂的新鲜橘子继续向外拓展。

所以我们可以**先把第一层的所有腐烂橘子收集起来，用 `depth` 变量记录其层数**。

而后开始广度优先搜索算法，**如果在当前层中找到下一层会被腐烂的新鲜橘子，那么将新鲜橘子加入队列，并记录其层数为 `当前层 + 1`。**

#### 代码实现

```js
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
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
```

#### 复杂度分析

* 时间复杂度：$ O(nm) $.
* 空间复杂度：$ O(nm) $.
