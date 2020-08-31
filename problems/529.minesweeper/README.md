# 扫雷游戏

> 题目地址: [https://leetcode-cn.com/problems/minesweeper/](https://leetcode-cn.com/problems/minesweeper/)

## 题目描述

让我们一起来玩扫雷游戏！

给定一个代表游戏板的二维字符矩阵。

**'M'** 代表一个**未挖出的**地雷；
**'E'** 代表一个**未挖出的**空方块；
**'B'** 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的**已挖出的**空白方块；
**数字**（'1' 到 '8'）表示有多少地雷与这块**已挖出的**方块相邻；
**'X'** 则表示一个**已挖出的**地雷。

现在给出在所有**未挖出的**方块中（'M'或者'E'）的下一个点击位置（行和列索引），根据以下规则，返回相应位置被点击后对应的面板：

1. 如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 **'X'**。
2. 如果一个**没有相邻地雷**的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的**未挖出**方块都应该被递归地揭露。
3. 如果一个**至少与一个地雷相邻**的空方块（'E'）被挖出，修改它为数字（'1'到'8'），表示相邻地雷的数量。
4. 如果在此次点击中，若无更多方块可被揭露，则返回面板。

示例 1：

```
输入: 

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]

输出: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

解释:

![example 1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/minesweeper_example_1.png)
```

示例 2：

```
输入: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Click : [1,2]

输出: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'X', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

解释:

![example 2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/minesweeper_example_2.png)
```

注意：

1. 输入矩阵的宽和高的范围为 `[1,50]`。
2. 点击的位置只能是未被挖出的方块 (`'M'` 或者 `'E'`)，这也意味着面板至少包含一个可点击的方块。
3. 输入面板不会是游戏结束的状态（即有地雷已被挖出）。
4. 简单起见，未提及的规则在这个问题中可被忽略。例如，当游戏结束时你不需要挖出所有地雷，考虑所有你可能赢得游戏或标记方块的情况。

------

## 题解

该题难点在于**理解扫雷游戏的规则**，主要是未被挖出的方块的递归走向，在了解清楚扫雷的游戏规则后，可以用**深度优先搜索**或**广度优先搜索**一把梭。

### 代码实现

```js
// 移动向量
const dx = [0, -1, 1, -1, 1, 1, 0, -1];
const dy = [-1, 0, -1, 1, 0, 1, 1, -1];

// 深度优先搜索
function DFS(board, x, y) {
  const n = board.length, m = board[0].length;
  const block = board[x][y];

  switch (block) {
    case "E":
      // 查看周围是否有炸弹
      let count = 0;
      for (let i = 0; i < dx.length; ++i) {
        const ix = dx[i] + x, iy = dy[i] + y;

        if (ix >= 0 && ix < n && iy >= 0 && iy < m && board[ix][iy] === "M") count++;
      }

      // 有炸弹
      if (count > 0) {
        board[x][y] = `${count}`;
      } else {
        // 没有炸弹
        board[x][y] = "B"; // Pending

        // 递归更新空方块
        for (let i = 0; i < dx.length; ++i) {
          const ix = dx[i] + x, iy = dy[i] + y;

          if (ix >= 0 && ix < n && iy >= 0 && iy < m && board[ix][iy] === "E") {
            DFS(board, ix, iy);
          }
        }
      }
      break;
    case "M":
      board[x][y] = "X";
      break;
  }
}

function updateBoard(board, click) {
  DFS(board, click[0], click[1]);

  return board;
}
```

### 复杂度分析

* 时间复杂度：$ O(nm) $.
* 空间复杂度：$ O(nm) $.
