# Convert Sorted Array to Binary Search Tree

> 题目地址: [https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)

## 题目描述

将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树*每个节点*的左右两个子树的高度差的绝对值不超过 1。

示例:

```
给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
```

------

## 题解

首先回顾一下二叉搜索树的定义，**二叉查找树**（英语：Binary Search Tree），也称为**二叉搜索树、有序二叉树**（ordered binary tree）或**排序二叉树**（sorted binary tree），是指一棵空树或者具有下列性质的二叉树：

1. 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
2. 若任意节点的右子树不空，则右子树上所有节点的值均大于或等于它的根节点的值；
3. 任意节点的左、右子树也分别为二叉查找树；

接着是如何构建一个二叉搜索树，对于给定的一个升序数组 `nums`，我们不难看出，**如果取数组中间的数作为二叉搜索树的根节点**，那么其左半边的值都是比中间的数要小，右半边的值都是比中间的数要大的，以 `[1, 2, 3, 4, 5, 6, 7, 8, 9]` 为例：

```
[1, 2, 3, 4, 5, 6, 7, 8, 9]
             ↑
            mid            # 取中间的数，作为根节点
             5
            / \
 [1, 2, 3, 4] [6, 7, 8, 9] # 把剩下的数组拆分成左半边和右半边
```

对于拆分的左半边和右半边，也是一个升序数组，故我们可以继续使用上面的思路，一直到数组无法再分：

```
[1, 2, 3, 4, 5, 6, 7, 8, 9]
             ↑
            mid             # 取中间的数，作为根节点
             5
            / \
 [1, 2, 3, 4] [6, 7, 8, 9]  # 把剩下的数组拆分成左半边和右半边
     ↑            ↑
    mid          mid        # 取中间的数，作为根节点
     2            7
    / \          / \
   1 [3, 4]     6 [8, 9]    # 把剩下的数组拆分成左半边和右半边
      ↑            ↑
     mid          mid
      3            8
       \            \
        4            9      # 一直重复直到数组无法再分
```

### 代码实现

```js
/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
function helper(nums, low, high) {
  // 数组无法再分
  if (low > high) return null;

  // 取中间的树
  const mid = Math.floor((low + high) / 2);

  // 构造根节点
  const node = new TreeNode(nums[mid]);
  // 拆分左半边放到左子树
  node.left = helper(nums, low, mid - 1);
  // 拆分右半边放到右子树
  node.right = helper(nums, mid + 1, high);

  return node;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export default function sortedArrayToBst(nums) {
  return helper(nums, 0, nums.length - 1);
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
