# 把二叉搜索树转换为累加树

> 题目地址: [https://leetcode-cn.com/problems/convert-bst-to-greater-tree/](https://leetcode-cn.com/problems/convert-bst-to-greater-tree/)

## 题目描述

给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。

例如：

```
输入: 原始二叉搜索树:
              5
            /   \
           2     13

输出: 转换为累加树:
             18
            /   \
          20     13
```

**注意：**本题和 1038: [https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/](https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/) 相同


------

## 题解

首先要知道二叉搜索树的特性：

- 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
- 若任意节点的右子树不空，则右子树上所有节点的值均大于或等于它的根节点的值；
- 任意节点的左、右子树也分别为二叉查找树；

利用右边必定比左边大这个特性，我们可以使用 **右中左（反向中序）** 的方式遍历该树，然后对遍历的每棵树的值进行累加即可。

### 代码实现

```js
function convertBst(root) {
  let sum = 0;

  function inOrder(root) {
    if (!root) return;

    inOrder(root.right);
    sum += root.val;
    root.val = sum;
    inOrder(root.left);
  }

  inOrder(root);

  return root;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
