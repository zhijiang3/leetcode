# 对称二叉树

> 题目地址: [https://leetcode-cn.com/problems/symmetric-tree/](https://leetcode-cn.com/problems/symmetric-tree/)

## 题目描述

给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 `[1,2,2,3,4,4,3]` 是对称的。

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

但是下面这个 `[1,2,2,null,3,null,3]` 则不是镜像对称的:

```
    1
   / \
  2   2
   \   \
   3    3
```

进阶：

你可以运用递归和迭代两种方法解决这个问题吗？

------

## 题解

### 代码实现

```js
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
function isMirror(t1, t2) {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;

  return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  return isMirror(root, root);
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
