# Max Area of Island

> 题目地址: [https://leetcode-cn.com/problems/max-area-of-island/](https://leetcode-cn.com/problems/max-area-of-island/)

## 题目描述

给定一个包含了一些 0 和 1 的非空二维数组 `grid` , 一个 **岛屿** 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)

示例 1:

```
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
对于上面这个给定矩阵应返回 6。注意答案不应该是11，因为岛屿只能包含水平或垂直的四个方向的‘1’。
```

示例 2:

```
[[0,0,0,0,0,0,0,0]]
对于上面这个给定的矩阵, 返回 0。
```

**注意:** 给定的矩阵 `grid` 的长度和宽度都不超过 50。

------

## 题解

### 深度优先搜索

#### 代码实现

```js
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

function maxAreaOfIsland(grid) {
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
```

#### 复杂度分析

* 时间复杂度：$ O(R \times C) $. 其中 $R$ 是给定网格中的行数，$C$ 是列数。我们访问每个网格最多一次
* 空间复杂度：$ O(R \times C) $.
