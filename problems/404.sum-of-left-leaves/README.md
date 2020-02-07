# Sum of Left Leaves

> 题目地址: [https://leetcode-cn.com/problems/sum-of-left-leaves/](https://leetcode-cn.com/problems/sum-of-left-leaves/)

## 题目描述

计算给定二叉树的所有左叶子之和。

示例：

```
    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
```

------

## 题解

该题在于如何识别出是叶子并且是左叶子，可以先从判断是否是**叶子**开始入手，以下图为例：

```
    3
   / \
  9  20
  ↑ /  \
   15   7
   ↑    ↑
```

上图中用 `↑` 指出了叶子的节点，不难看出，**如果一个节点是叶子节点，那么其左节点和右节点都是空的**。

那么接下来判断是否是左叶子，有两种方法：

1. 在添加子节点到队列时，为左节点添加一个标记
2. 判断当前节点的下一个左节点存在且下一个左节点是叶子

### 代码实现

```js
function sumOfLeftLeaves(root) {
  if (!root) return 0;

  let sum = 0;
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }
  }

  return sum;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
