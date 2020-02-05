# Invert Binary Tree

> 题目地址: [https://leetcode-cn.com/problems/invert-binary-tree/](https://leetcode-cn.com/problems/invert-binary-tree/)

## 题目描述

翻转一棵二叉树。

示例：

输入：

```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

输出：

```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

**备注:**

这个问题是受到 [Max Howell](https://twitter.com/mxcl) 的 [原问题](https://twitter.com/mxcl/status/608682016205344768) 启发的 ：

> 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。

------

## 题解

对每个节点都进行左节点和右节点交换，而对于每个节点的遍历方法，可以借助深度优先搜索（Breadth-fist Search, BFS）的思路。

### 代码实现

```js
function invertTree(root) {
  if (!root) return root;

  const enqueue = [];

  enqueue.push(root);

  while (enqueue.length) {
    const treeNode = enqueue.shift();
    const { left, right } = treeNode;

    treeNode.left = right;
    treeNode.right = left;

    if (left) enqueue.push(left);
    if (right) enqueue.push(right);
  }

  return root;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
