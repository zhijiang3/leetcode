# Unique Paths

> 题目地址: [https://leetcode-cn.com/problems/unique-paths/](https://leetcode-cn.com/problems/unique-paths/)

## 题目描述

一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？

![机器人迷宫](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/robot_maze.png)

例如，上图是一个 `7 x 3` 的网格。有多少可能的路径？

**说明：** `m` 和 `n` 的值均不超过 `100`。

示例 1:

```
输入: m = 3, n = 2
输出: 3
解释:
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向右 -> 向下
2. 向右 -> 向下 -> 向右
3. 向下 -> 向右 -> 向右
```

示例 2:

```
输入: m = 7, n = 3
输出: 28
```

------

## 题解

### 动态规划

假设 `f[i][j]` 为到达位置 `i, j` 最多的路径数量，那么有动态方程：

```
f[i][j] = f[i - 1][j] + f[i][j - 1]
```

以下图示，右下角 `f[i][j]` 的最多的路径数量就是其左边 `f[i][j - 1]` 和上边 `f[i - 1][j]` 的最多路径数量相加。

```
     
     (1,1) | (1,2) | (1,3) | ... | (1,j - 1) | (1,j)
     (2,1) |                .                | (2,j)
     (3,1) |                .                | (3,j)
      ...  |                .                | ...
 (i - 1,1) |                .                | (i - 1,j) ←
     (i,1) | (i,2) | (i,3) | ... | (i,j - 1) | (i,j)
                                       ↑
```

注意，对于第一行 `f[1][j]`，或者第一列 `f[i][1]`，由于都是在边界，所以其最多的路径数量总是 1。

#### 代码实现

```js
function uniquePaths(m, n) {
  const f = [];

  for (let i = 0; i < m; i++) {
    f[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        f[i][j] = 1;
      } else {
        f[i][j] = f[i - 1][j] + f[i][j - 1];
      }
    }
  }

  return f[m - 1][n - 1];
}
```

#### 复杂度分析

* 时间复杂度：$ O(mn) $.
* 空间复杂度：$ O(mn) $.