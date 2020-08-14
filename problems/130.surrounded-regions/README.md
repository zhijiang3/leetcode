# 被围绕的区域

> 题目地址: [https://leetcode-cn.com/problems/surrounded-regions/](https://leetcode-cn.com/problems/surrounded-regions/)

## 题目描述

给定一个二维的矩阵，包含 `'X'` 和 `'O'`（**字母 O**）。

找到所有被 `'X'` 围绕的区域，并将这些区域里所有的 `'O'` 用 `'X'` 填充。

示例:

```
X X X X
X O O X
X X O X
X O X X
```

运行你的函数后，矩阵变为：

```
X X X X
X X X X
X X X X
X O X X
```

解释:

被围绕的区间不会存在于边界上，换句话说，任何边界上的 `'O'` 都不会被填充为 `'X'`。 任何不在边界上，或不与边界上的 `'O'` 相连的 `'O'` 最终都会被填充为 `'X'`。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

------

## 题解

先通过 *广度优先搜索* 处理边界上的 `'O'` 及其相邻的元素，接着就可以把剩下的 `'O'` 填充 `'X'`。

### 代码实现

```js
function BFS(board, x, y, n, m) {
  if (x < 0 || y < 0 || x > n - 1 || y > m - 1 || board[x][y] !== 'O') return;

  board[x][y] = '#';

  BFS(board, x, y - 1, n, m);
  BFS(board, x - 1, y, n, m);
  BFS(board, x, y + 1, n, m);
  BFS(board, x + 1, y, n, m);
}

function solve(board) {
  if (!board.length) return [];

  const n = board.length, m = board[0].length;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (i === 0 || j === 0 || (i === n - 1) || (j === m - 1)) {
        BFS(board, i, j, n, m);
      }
    }
  }

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (board[i][j] === '#') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
}
```

### 复杂度分析

* 时间复杂度：$ O(nm) $.
* 空间复杂度：$ O(nm) $.
