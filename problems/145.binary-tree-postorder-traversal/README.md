# 二叉树的后序遍历

> 题目地址: [https://leetcode-cn.com/problems/binary-tree-postorder-traversal/](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

## 题目描述

给定一个二叉树，返回它的 *后序* 遍历。

示例:

```
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]
```

**进阶**: 递归算法很简单，你可以通过迭代算法完成吗？

------

## 题解

### 递归

#### 代码实现

```ts
function postorder(root, ans) {
  if (!root) return;

  postorder(root.left);
  postorder(root.right);
  ans.push(root.val);
}

function postorderTraversal(root: TreeNode): number[] {
  const ans = [];
  postorder(root, ans);
  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $. $n$ 为节点数量
* 空间复杂度：$ O(n) $.

### 使用栈模拟递归

#### 代码实现

```ts
function postorderTraversal(root: TreeNode): number[] {
  if (!root) return [];

  const ans = [];
  const stack = [];
  let prev;

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.right && root.right !== prev) {
      stack.push(root);
      root = root.right;
    } else {
      prev = root;
      root = null; // 避免再进循环时重复查找左子节点
      ans.push(root.val);
    }
  }

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $. $n$ 为节点数量
* 空间复杂度：$ O(n) $.
