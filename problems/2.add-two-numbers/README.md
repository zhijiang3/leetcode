# Add Two Numbers

> 题目地址: [https://leetcode-cn.com/problems/add-two-numbers/](https://leetcode-cn.com/problems/add-two-numbers/)

## 题目描述

给出两个 **非空** 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 **逆序** 的方式存储的，并且它们的每个节点只能存储 **一位** 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```
------

## 题解

当我们对两个整数进行加法运算时，如果相加的两个数，某一位超过了 9，那么我们会把”进“了位的值保存下来，在下一位相加时加上，如 `19 + 23`：

```
    1 9
 +  2 3 ... 个位相加 9 + 3 = 12，所以十位进 1
    1   ... 这里的 1 被保存了下来，用作下一次的求和计算
-------
      2

    1 9
 +  2 3
    1
-------
    4 2 ... 最终结果
```

借助这个思路，我们只需要**把求和后“进”了位的值保存下来，在下一次加入求和运算**即可。

### 代码实现

```js
function addTwoNumbers(l1, l2) {
  const head = new ListNode('head');

  let newList = head;
  let carry = 0;

  while (l1 || l2 || carry) {
    const sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);

    newList.next = new ListNode(sum % 10);
    carry = (sum / 10) | 0;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    newList = newList.next;
  }

  return head.next;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $. n 为最长的链表的长度。
* 空间复杂度：$ O(n) $. 使用了一个链表保存结果。
