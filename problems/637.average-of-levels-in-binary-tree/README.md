# 二叉树的层平均值

> 题目地址: [https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/](https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/)

## 题目描述

给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。

示例 1：

```
输入：
    3
   / \
  9  20
    /  \
   15   7
输出：[3, 14.5, 11]
解释：
第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。
```

提示：

- 节点值的范围在 32 位有符号整数范围内。

------

## 题解

用广度优先搜索或深度优先搜索，遍历节点时记录当前层数即可。

### 代码实现

```js
function DFS(root, ans, level) {
  if (!root) return;

  ans[level] || (ans[level] = []);

  ans[level].push(root.val);
  if (root.left) DFS(root.left, ans, level + 1);
  if (root.right) DFS(root.right, ans, level + 1);
}

function averageOfLevels(root) {
  const ans = [];

  DFS(root, ans, 0);

  return ans.map(nums => {
    return nums.reduce((sum, num) => sum + num, 0) / nums.length;
  });
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $. $n$ 为节点个数
* 空间复杂度：$ O(n) $.
