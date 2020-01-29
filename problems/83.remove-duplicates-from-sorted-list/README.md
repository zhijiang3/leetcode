# Remove Duplicates from Sorted List

> 题目地址: [https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

## 题目描述

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

```
输入: 1->1->2
输出: 1->2
```

示例 2:

```
输入: 1->1->2->3->3
输出: 1->2->3
```

------

## 题解

### 双指针

使用双指针进行处理，一个指针 `currNode` 遍历链表，一个指针 `firstEqualNode` 记录第一个不重复的节点，当遇到重复值时，把 `firstEqualNode.next` 指向 `currNode.next` 即可（相当于把当前的节点删掉）。

以 `1 -> 1 -> 1 -> 2 -> 3 -> 3 -> null` 链表为例子：

```
# ↓ = firstEqualNode, ↑ = currNode

↓
1 -> 1 -> 1 -> 2 -> 3 -> 3 -> null
     ↑
-------------------------------------
   |------|
↓  |      v
1 -| 1 -> 1 -> 2 -> 3 -> 3 -> null
     ↑
# 两个值相等，把 firstEqualNode.next 的指针指向 currNode.next
-------------------------------------
# 继续遍历
   |------|
↓  |      v
1 -| 1 -> 1 -> 2 -> 3 -> 3 -> null
          ↑
-------------------------------------
   |-----------|
↓  |           v
1 -| 1 -> 1 -> 2 -> 3 -> 3 -> null
          ↑
# 两个值相等，把 firstEqualNode.next 的指针指向 currNode.next
-------------------------------------
# 继续遍历
   |-----------|
↓  |           v
1 -| 1 -> 1 -> 2 -> 3 -> 3 -> null
               ↑
-------------------------------------
               ↓
   |-----------|
   |           v
1 -| 1 -> 1 -> 2 -> 3 -> 3 -> null
               ↑
# 两个值不相同，修改 firstEqualNode 的指针
-------------------------------------
# 继续遍历
               ↓
   |-----------|
   |           v
1 -| 1 -> 1 -> 2 -> 3 -> 3 -> null
                    ↑
-------------------------------------
   |-----------|
   |           v    ↓
1 -| 1 -> 1 -> 2 -> 3 -> 3 -> null
                    ↑
# 两个值不相同，修改 firstEqualNode 的指针
-------------------------------------
# 继续遍历
   |-----------|
   |           v    ↓
1 -| 1 -> 1 -> 2 -> 3 -> 3 -> null
                         ↑
-------------------------------------
   |-----------|       |-------|
   |           v    ↓  |       v
1 -| 1 -> 1 -> 2 -> 3 -| 3 -> null
                         ↑
# 两个值相等，把 firstEqualNode.next 的指针指向 currNode.next
-------------------------------------
# 链表已遍历完，最终指向是这样的
1 -> 2 -> 3 -> null
```

#### 代码实现

```js
function deleteDuplicates(head) {
  let firstEqualNode = head;
  let currNode = head && head.next;

  while (currNode) {
    if (firstEqualNode.val === currNode.val) {
      firstEqualNode.next = currNode.next;
    } else {
      firstEqualNode = currNode;
    }

    currNode = currNode.next;
  }

  return head;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
