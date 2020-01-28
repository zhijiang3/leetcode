# Convert Binary Number in a Linked List to Integer

> 题目地址: [https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/](https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/)

## 题目描述

给你一个单链表的引用结点 `head`。链表中每个结点的值不是 **0** 就是 **1**。已知此链表是一个整数数字的二进制表示形式。

请你返回该链表所表示数字的 **十进制值** 。

示例 1：

![示例1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/12/15/graph-1.png)

```
输入：head = [1,0,1]
输出：5
解释：二进制数 (101) 转化为十进制数 (5)
```

示例 2：

```
输入：head = [0]
输出：0
```

示例 3：

```
输入：head = [1]
输出：1
```

示例 4：

```
输入：head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
输出：18880
```

示例 5：

```
输入：head = [0,0]
输出：0
```

提示：

* 链表不为空。
* 链表的结点总数不超过 `30`。
* 每个结点的值不是 `0` 就是 `1`。

------

## 题解

先回顾一下二进制转十进制的方法，如 $101_{(2)}$：

$$
101_{(2)} = 1 \times 2^{2} + 0 \times 2^{1} + 1 \times 2^{0} = 4 + 0 + 1 = 5_{(10)}
$$

我们设 `a = 1` `b = 0` `c = 1`，则计算 `101` 的十进制的公式为：

$$
2^2 \times a + 2 \times b + c
$$

由于链表中从高位到低位存放数字的二进制表示，所以我们需要对高位进行 `2` 的累乘，即：

第一位 $A = a$  
第二位 $B = 2 \times A + b = 2 \times a + b$  
第三位 $C = 2 \times B + c = 2 \times (2 \times a + b) + c = 2^2 \times a + 2 \times b + c$  

可以看到，我们每次对上一次计算的结果乘以 `2` 即可把之前的数进一位。

### 代码实现

```js
function getDecimalValue(head) {
  let result = 0;

  while (head) {
    result = 2 * result + head.val;

    head = head.next;
  }

  return result;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
