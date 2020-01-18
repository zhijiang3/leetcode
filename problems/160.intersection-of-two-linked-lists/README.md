# Intersection of Two Linked Lists

> 题目地址: [https://leetcode-cn.com/problems/intersection-of-two-linked-lists/](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)

## 题目描述

编写一个程序，找到两个单链表相交的起始节点。(zhijiang3注：这里的相交指的是，两个节点的指向相同，而不是节点的值相同)

如下面的两个链表：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png)

在节点 c1 开始相交。

示例 1：

![示例 1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_1.png)

```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```

示例 2：

![示例 2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_2.png)

```
输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Reference of the node with value = 2
输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
```

示例 3：

![示例 3](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_3.png)

```
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
解释：这两个链表不相交，因此返回 null。
```

注意：

* 如果两个链表没有交点，返回 `null`.
* 在返回结果后，两个链表仍须保持原有的结构。
* 可假定整个链表结构中没有循环。
* 程序尽量满足 $ O(n) $ 时间复杂度，且仅用 $ O(1) $ 内存。

------

## 题解

假设现有链表`A` `B` 如下：

```
A = a -> b -> c -> d
B = e -> c -> d
```

我们可以看出，链表 `A` `B` 从节点 `c` 处开始相交。

如果我们把链表 `A` 的结尾指向 `B`，把链表 `B` 的结尾指向 `A`，即：

```
A = a -> b -> c -> d
B = e -> c -> d

A -> B = a -> b -> c -> d -> e -> c -> d
                             -----------
                               这块属于B
B -> A = e -> c -> d -> a -> b -> c -> d
                        ----------------
                             这块属于A
```

不难发现，**两个链表等长且两个链表结尾从节点 `c` 处开始完全相同**，接着我们使用两个指针去判断尾部拼接后的两个链表即可得知是否相交。

```
# a != e，移动指针指向下一个节点
         ↓
A -> B = a -> b -> c -> d -> e -> c -> d
B -> A = e -> c -> d -> a -> b -> c -> d
         ↑

# b != c，移动指针指向下一个节点
              ↓
A -> B = a -> b -> c -> d -> e -> c -> d
B -> A = e -> c -> d -> a -> b -> c -> d
              ↑

# c != d，移动指针指向下一个节点
                   ↓
A -> B = a -> b -> c -> d -> e -> c -> d
B -> A = e -> c -> d -> a -> b -> c -> d
                   ↑

# d != a，移动指针指向下一个节点
                        ↓
A -> B = a -> b -> c -> d -> e -> c -> d
B -> A = e -> c -> d -> a -> b -> c -> d
                        ↑

# e != b，移动指针指向下一个节点
                             ↓
A -> B = a -> b -> c -> d -> e -> c -> d
B -> A = e -> c -> d -> a -> b -> c -> d
                             ↑

# c == c !! 两个链表相交，相交的节点为 c
                                  ↓
A -> B = a -> b -> c -> d -> e -> c -> d
B -> A = e -> c -> d -> a -> b -> c -> d
                                  ↑
```

### 代码实现

```js
function getIntersectionNode(headA, headB) {
  let pointA = headA;
  let pointB = headB;

  while (pointA !== null || pointB !== null) {
    if (pointA === pointB) return pointA;

    pointA = !pointA ? headB : pointA.next;
    pointB = !pointB ? headA : pointB.next;
  }

  return null;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
