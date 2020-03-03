# Convert Sorted List To Binary Search Tree

> 题目地址: [https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/](https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/)

## 题目描述

给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树 *每个节点* 的左右两个子树的高度差的绝对值不超过 1。

示例:

```
给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
```

------

## 题解

### 递归中序遍历1

对于给定的升序链表，我们不难想到使用中序遍历，即使用给定列表中的中间元素作为二叉搜索树的根，该点左侧的所有元素递归的去构造左子树，同理右侧的元素构造右子树。

#### 代码实现

```js
function sortedListToBST(head) {
  if (!head) return null;

  let prev = null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  if (prev) prev.next = null;

  const node = new TreeNode(slow.val);

  if (head === slow) return node;

  node.left = sortedListToBST(head);
  node.right = sortedListToBST(slow.next);

  return node;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n\log n) $.
* 空间复杂度：$ O(\log n) $.

### 递归中序遍历2

基于上题，可以使用一个数组保存链表，以空间换时间。

#### 代码实现

```js
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {TreeNode}
 */
function helper(nums, left, right) {
  if (left > right) return null;

  const mid = Math.floor((left + right) / 2);

  const node = new TreeNode(nums[mid]);
  node.left = helper(nums, left, mid - 1);
  node.right = helper(nums, mid + 1, right);

  return node;
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function sortedListToBST(head) {
  const nums = [];
  while (head) {
    nums.push(head.val);

    head = head.next;
  }

  return helper(nums, 0, nums.length - 1);
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.

### 二叉搜索树的中序遍历模拟

> 此算法参考：[https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/solution/you-xu-lian-biao-zhuan-huan-er-cha-sou-suo-shu-by-/](https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/solution/you-xu-lian-biao-zhuan-huan-er-cha-sou-suo-shu-by-/)

中序遍历一棵二叉搜索树会有一个非常有趣的结论。

> 中序遍历一棵二叉搜索树的结果是得到一个升序序列。

这个方法模拟了二叉搜索树的构造过程，因为我们已经获得有序的链表，所以自然的产生了这样的想法。

在描述算法之前，先看一下中序遍历是如何获得有序值的。

基于解决这个问题的中序遍历的思想：

> 我们知道中序遍历最左边的元素一定是给定链表的头部，类似地下一个元素一定是链表的下一个元素，以此类推。这是肯定的因为给定的初始链表保证了升序排列。

在了解了中序遍历二叉搜索树和有序数组的关系之后，让我们来看看算法。

#### 代码实现

```js
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function sortedListToBST(head) {
  let count = 0;
  let node = head;

  while (node) {
    count++;
    node = node.next;
  }

  /**
   * @param {ListNode} head
   * @param {number} left
   * @param {number} right
   * @return {TreeNode}
   */
  function helper(left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);

    // 递归形成左半部分
    const leftNode = helper(left, mid - 1);

    // 左半边的节点处理完成后，处理当前节点
    const node = new TreeNode(head.val);
    node.left = leftNode;
    head = head.next;

    // 递归完成右半部分
    node.right = helper(mid + 1, right);

    return node;
  }

  return helper(0, count - 1);
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
