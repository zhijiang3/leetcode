# Next Greater Node In Linked List

> 题目地址: [https://leetcode-cn.com/problems/next-greater-node-in-linked-list/](https://leetcode-cn.com/problems/next-greater-node-in-linked-list/)

## 题目描述

给出一个以头节点 `head` 作为第一个节点的链表。链表中的节点分别编号为：`node_1, node_2, node_3, ... `。

每个节点都可能有下一个更大值（next larger value）：对于 `node_i`，如果其 `next_larger(node_i)` 是 `node_j.val`，那么就有 `j > i` 且 `node_j.val > node_i.val`，而 `j` 是可能的选项中最小的那个。如果不存在这样的 `j`，那么下一个更大值为 `0`。

返回整数答案数组 `answer`，其中 `answer[i] = next_larger(node_{i+1})`。

*注意*：在下面的示例中，诸如 [2,1,5] 这样的**输入**（不是输出）是链表的序列化表示，其头节点的值为 2，第二个节点值为 1，第三个节点值为 5 。
 

示例 1：

```
输入：[2,1,5]
输出：[5,5,0]
```

示例 2：

```
输入：[2,7,4,3,5]
输出：[7,0,5,5,0]
```

示例 3：

```
输入：[1,7,5,1,9,2,5,1]
输出：[7,9,9,9,0,5,0,0]
```

提示：

* 对于链表中的每个节点，`1 <= node.val <= 10^9`
* 给定列表的长度在 `[0, 10000]` 范围内

------

## 题解

### 单调递减栈

首先把链表转成数组，然后从右往左遍历数组，通过维护一个单调递减的栈，将当前元素根据单调递减栈的性质先将小于当前元素的值弹出（这里可以弹出的原因是，栈中小于当前元素在往后的比较中必将被当前元素取代），此时栈顶的元素就是当前值的下一个更大值，最后再把当前元素重新压入，以便下一个值的判断。

#### 代码实现

```js
function nextLargerNodes(head) {
  const result = [];
  const stack = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  for (let i = result.length - 1; i >= 0; i--) {
    const cur = result[i];
    while (stack.length && stack[stack.length - 1] <= cur) {
      stack.pop();
    }
    result[i] = stack.length ? stack[stack.length - 1] : 0;
    stack.push(cur);
  }

  return result;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
