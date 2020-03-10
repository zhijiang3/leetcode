# Diameter of Binary Tree

> 题目地址: [https://leetcode-cn.com/problems/diameter-of-binary-tree/](https://leetcode-cn.com/problems/diameter-of-binary-tree/)

## 题目描述

给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。

示例 :
给定二叉树

```
          1
         / \
        2   3
       / \
      4   5
``` 

返回 **3**, 它的长度是路径 `[4,2,1,3]` 或者 `[5,2,1,3]`。

**注意：** 两结点之间的路径长度是以它们之间边的数目表示。

------

## 题解

要找到二叉树两个节点之间的最大值，那么肯定是一个叶子到另一个叶子的距离中找出最大的那个。

如果要一个一个叶子找的话，复杂度过高，不太合理。

不难发现，一个节点的 **左子树的高度 + 右子树的高度** 即可得到该节点的左叶子到右叶子的路径。如果我们对每一个节点都计算一次高度，并且记录其中某个节点的最大路径，那么这个问题可以解决。

### 代码实现

```js
function diameterOfBinaryTree(root) {
  let max = 1;

  /**
   * @param {TreeNode} root
   * @return {number}
   */
  function helper(root) {
    if (!root) return 0;

    const leftDepth = helper(root.left);
    const rightDepth = helper(root.right);

    max = Math.max(max, leftDepth + rightDepth + 1);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  helper(root);

  return max - 1;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(h) $. $h$ 为二叉树的高度。
