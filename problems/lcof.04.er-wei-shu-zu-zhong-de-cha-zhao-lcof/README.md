# 二维数组中的查找

> 题目地址: [https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

## 题目描述

在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

示例:

现有矩阵 matrix 如下：

```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```

给定 `target = 5`，返回 `true`。

给定 `target = 20`，返回 `false`。

**限制：**

* `0 <= n <= 1000`

* `0 <= m <= 1000`

------

## 题解

### 代码实现

```js
function findNumberIn2DArray(matrix, target) {
  if (!matrix.length) return false;

  let n = matrix.length, m = matrix[0].length;
  // 矩阵右上角
  let x = 0, y = m - 1;

  while (x < n && y >= 0) {
    if (matrix[x][y] > target) {
      // 当前位置比目标值要大，往左找
      y--;
    } else if (matrix[x][y] < target) {
      // 当前位置比目标值要小，往下找
      x++;
    } else {
      return true;
    }
  }

  return false;
}
```

### 复杂度分析

* 时间复杂度：$ O(n + m) $.
* 空间复杂度：$ O(1) $.
