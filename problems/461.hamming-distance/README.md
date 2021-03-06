# Hamming Distance

> 题目地址: [https://leetcode-cn.com/problems/hamming-distance/](https://leetcode-cn.com/problems/hamming-distance/)

## 题目描述

两个整数之间的 <a href="https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB" target="_blank">汉明距离</a> 指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 `x` 和 `y`，计算它们之间的汉明距离。

**注意：**

$0 \leq x, y < 2^{31}$

示例:

```
输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
```

------

## 题解

### 布赖恩·克尼根算法

需要获取两个数字二进制位不同的地方，可以通过**按位异或**操作得到：

```
1 ^ 1 = 0    # 二进制1 异或 二进制1 因为两个位相同，所以结果为 0
1 ^ 0 = 1    # 二进制1 异或 二进制0 结果为 1
0 ^ 1 = 1    # 二进制0 异或 二进制1 结果为 1
0 ^ 0 = 0    # 二进制0 异或 二进制0 因为两个位相同，所以结果为 0
```

拿到异或结果后，可以计算位上 1 的个数，就是要找的汉明距离，可以通过无符号右移操作对每个位进行读取判断，但是有一种算法可以更快的拿到 1 的个数，就是布赖恩·克尼根算法：

> 当我们在 number 和 number-1 上做 AND 位运算时，原数字 number 的最右边等于 1 的比特会被移除。

以数字 8 为例，8 的二进制为 $1000_{(2)}$，`8 - 1` 也就是 7 的二进制为 $0111_{(2)}$，可以看到：

```
  1 0 0 0    # 8 的二进制
& 0 1 1 1    # 7 的二进制
----------
  0 0 0 0
```

只进行了 1 次**按位与**操作，所以 8 的二进制位只有 1 个 1。

#### 代码实现

```js
function hammingDistance(x, y) {
  let ans = 0;
  let n = x ^ y;

  while (n) {
    ans++;
    n &= (n - 1);
  }

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(\log n) $. `&=` 操作最多需要对 31 位数字的每一位都进行一次。
* 空间复杂度：$ O(1) $.
