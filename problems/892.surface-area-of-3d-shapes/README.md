# Surface Area Of 3D Shapes

> 题目地址: [https://leetcode-cn.com/problems/surface-area-of-3d-shapes/](https://leetcode-cn.com/problems/surface-area-of-3d-shapes/)

## 题目描述

在 `N * N` 的网格上，我们放置一些 `1 * 1 * 1`  的立方体。

每个值 `v = grid[i][j]` 表示 `v` 个正方体叠放在对应单元格 `(i, j)` 上。

请你返回最终形体的表面积。

示例 1：

```
输入：[[2]]
输出：10
```

示例 2：

```
输入：[[1,2],[3,4]]
输出：34
```

示例 3：

```
输入：[[1,0],[0,2]]
输出：16
```

示例 4：

```
输入：[[1,1,1],[1,0,1],[1,1,1]]
输出：32
```

示例 5：

```
输入：[[2,2,2],[2,1,2],[2,2,2]]
输出：46
```

**提示：**

* `1 <= N <= 50`
* `0 <= grid[i][j] <= 50`

------

## 题解

首先要计算出 `n` 层叠起来的立方体的面积，其计算公式为：$a_{n} = 4 * n + 2, n \in Z_{+}$

接着，对于每一个网格，需要取该网格和其附近（上下左右）的每个立方体，比较该网格和附近的层数，减去较小的层数（因为两个接触的面是不能算在面积上的）。

### 代码实现

```js
function surfaceArea(grid) {
  let rowSize = grid.length, colSize = grid[0].length;
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  let area = 0;
  for (let i = 0; i < rowSize; ++i) {
    for (let j = 0; j < colSize; ++j) {
      if (grid[i][j] > 0)
        area += 4 * grid[i][j] + 2;

      for (let l = 0; l < dx.length; ++l) {
        const di = i + dx[l];
        const dj = j + dy[l];

        if (di >= 0 && di < rowSize && dj >= 0 && dj < colSize) {
          area -= Math.min(grid[di][dj], grid[i][j]);
        }
      }
    }
  }
  return area;
}
```

### 复杂度分析

* 时间复杂度：$ O(N^2) $.
* 空间复杂度：$ O(1) $.
