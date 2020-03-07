# Palindrome Linked List

> 题目地址: [https://leetcode-cn.com/problems/palindrome-linked-list/](https://leetcode-cn.com/problems/palindrome-linked-list/)

## 题目描述

请判断一个链表是否为回文链表。

示例 1:

```
输入: 1->2
输出: false
```

示例 2:

```
输入: 1->2->2->1
输出: true
```

**进阶：**

你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

------

## 题解

### 从中间节点翻转链表

比较回文最直接的想法是，拿 `a[0]` 和 `a[n]` 比较，然后拿 `a[1]` 和 `a[n - 1]` 比较，一比较到 `a[n / 2]` 的节点（也就是中间节点），如果都能满足则为回文。

所以在本题的单链表中，我们需要设法让链表能从 `a[n]` 往前遍历到 `a[n / 2]`，所以可以考虑先拿到链表的中间节点 `a[n / 2]`，再反转 `a[n / 2] ~ a[n]` 的节点，那么可以得到链表 `a[n] -> ... -> a[n / 2 + 1] -> a[n / 2] -> null`，此时拿反转的链表与与原链表一一比较即可得出是否回文，以 `head = 1 -> 2 -> 3 -> 2 -> 1` 为例子：

```
 head      
  ↓        
  1 -> 2 -> 3 -> 2 -> 1
-------------------------------------------
 head      mid            # 找到中间节点
  ↓         ↓
  1 -> 2 -> 3 -> 2 -> 1
-------------------------------------------
 head      mid      last
  ↓         ↓         ↓
  1 -> 2 -> 3 <- 2 <- 1   # 从 mid 开始反转链表得到
            |
            v
           null

# 整理反转后的链表得到，接下来一一比较 head 和 last 即可
head = 1 -> 2 -> 3 -> null
last = 1 -> 2 -> 3 -> null
```

#### 代码实现

```js
function isPalindrome(head) {
  // 查找中间元素
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 从中间开始反转链表
  let prev = null;
  while (slow) {
    const next = slow.next;

    slow.next = prev;
    prev = slow;

    slow = next;
  }

  // 对比开头和结尾的值是否一致
  while (prev) {
    if (prev.val !== head.val) return false;

    prev = prev.next;
    head = head.next;
  }

  return true;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
