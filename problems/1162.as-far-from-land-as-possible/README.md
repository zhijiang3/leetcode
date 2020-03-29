# As Far from Land as Possible

> 题目地址: [https://leetcode-cn.com/problems/as-far-from-land-as-possible/](https://leetcode-cn.com/problems/as-far-from-land-as-possible/)

## 题目描述

你现在手里有一份大小为 N x N 的『地图』（网格） `grid`，上面的每个『区域』（单元格）都用 `0` 和 `1` 标记好了。其中 `0` 代表海洋，`1` 代表陆地，你知道距离陆地区域最远的海洋区域是是哪一个吗？请返回该海洋区域到离它最近的陆地区域的距离。

我们这里说的距离是『曼哈顿距离』（ Manhattan Distance）：`(x0, y0)` 和 `(x1, y1)` 这两个区域之间的距离是 `|x0 - x1| + |y0 - y1|` 。

如果我们的地图上只有陆地或者海洋，请返回 `-1`。

示例 1：

![example 1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/08/17/1336_ex1.jpeg)

```
输入：[[1,0,1],[0,0,0],[1,0,1]]
输出：2
解释： 
海洋区域 (1, 1) 和所有陆地区域之间的距离都达到最大，最大距离为 2。
```

示例 2：

![example 2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/08/17/1336_ex2.jpeg)

```
输入：[[1,0,0],[0,0,0],[0,0,0]]
输出：4
解释： 
海洋区域 (2, 2) 和所有陆地区域之间的距离都达到最大，最大距离为 4。
```

**提示：**

* `1 <= grid.length == grid[0].length <= 100`
* `grid[i][j]` 不是 `0` 就是 `1`

------

## 题解

### 广度优先搜索

#### 代码实现

```js
const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxDistance(grid) {
  const n = grid.length;

  const queue = [];
  for (let x = 0; x < n; ++x) {
    for (let y = 0; y < n; ++y) {
      // 添加所有的陆地，设置距离为 0
      if (grid[x][y] === 1)
        queue.push([x, y, 0]);
    }
  }

  let ans = -1;
  while (queue.length) {
    const [x, y, distance] = queue.shift();
    // 如果有找到海洋，则找最大的那个
    if (distance !== 0)
      ans = Math.max(ans, distance);

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
```

#### 复杂度分析

* 时间复杂度：$ O(n^2) $.
* 空间复杂度：$ O(n^2) $.
