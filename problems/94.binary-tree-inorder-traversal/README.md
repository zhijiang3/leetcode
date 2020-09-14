# 二叉树的中序遍历

> 题目地址: [https://leetcode-cn.com/problems/binary-tree-inorder-traversal/](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

## 题目描述

给定一个二叉树，返回它的 *中序* 遍历。

示例:

```
输入: [1, null, 2, 3]
   1
    \
     2
    /
   3

输出: [1, 3, 2]
```

**进阶:** 递归算法很简单，你可以通过迭代算法完成吗？

------

## 题解

### 递归

#### 代码实现

```js
function inOrder(root, ans) {
  if (!root) return;

  if (root.left) inOrder(root.left, ans);
  ans.push(root.val);
  if (root.right) inOrder(root.right, ans);
}

function inorderTraversal(root) {
  const ans = [];

  inOrder(root, ans);

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $. $n$ 为二叉树中节点的个数
* 空间复杂度：$ O(n) $.

### 栈模拟递归

#### 代码实现

```js
function inorderTraversal(root) {
  const ans = [];

  const stack = [];
  while (root || stack.length) {
    // 一直向左遍历，直到叶子结点，记录沿途的左节点
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop(); // 先进后出，依次导出左节点
    ans.push(root.val); // 记录值
    // 如果有右节点，则会再一次进入循环，优先找到右节点的所有左子树，然后形成递归
    root = root.right;
  }

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $. $n$ 为二叉树中节点的个数
* 空间复杂度：$ O(n) $.
