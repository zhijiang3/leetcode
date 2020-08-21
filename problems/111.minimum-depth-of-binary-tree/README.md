# 二叉树的最小深度

> 题目地址: [https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

## 题目描述

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。

示例:

给定二叉树 `[3, 9, 20, null, null, 15, 7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最小深度  2.


------

## 题解

### 代码实现

```js
/**
 * @param {TreeNode} node
 * @return {boolean}
 */
function isLeaf(node) {
  return !node.left && !node.right;
}

function minDepth(root) {
  if (!root) return 0;

  let minDepth = Infinity;
  const stack = [];

  stack.push([root, 1]);

  while (stack.length) {
    const [node, depth] = stack.pop();

    if (isLeaf(node)) minDepth = Math.min(minDepth, depth);

    if (depth > minDepth) continue; /** 剪枝，比当前最小的还要大，那么不需要再深入了 */
    if (node.right) stack.push([node.right, depth + 1]);
    if (node.left) stack.push([node.left, depth + 1]);
  }

  return minDepth;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
