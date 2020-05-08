# 二叉树的层序遍历

> 题目地址: [https://leetcode-cn.com/problems/binary-tree-level-order-traversal/](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

## 题目描述

给你一个二叉树，请你返回其按 **层序遍历** 得到的节点值。（即逐层地，从左到右访问所有节点）。

示例：

二叉树：`[3, 9, 20, null, null, 15, 7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```
[
  [3],
  [9,20],
  [15,7]
]
```

------

## 题解

在访问子树时传递层次参数即可。

### 代码实现

```js
/**
 * @param {TreeNode} root
 * @param {number} depth
 * @param {number[][]} arr
 */
function preOrder(root, depth, arr) {
  if (!root) return;

  if (!arr[depth]) arr[depth] = [];
  arr[depth].push(root.val);

  preOrder(root.left, depth + 1, arr);
  preOrder(root.right, depth + 1, arr);
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  const ans = [];

  preOrder(root, 0, ans);

  return ans;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
