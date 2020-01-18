# Find Numbers With Even Number Of Digits

> 题目地址: [https://leetcode-cn.com/problems/find-numbers-with-even-number-of-digits/](https://leetcode-cn.com/problems/find-numbers-with-even-number-of-digits/)

## 题目描述

给你一个整数数组 `nums`，请你返回其中位数为 **偶数** 的数字的个数。

示例 1：

```
输入：nums = [12,345,2,6,7896]
输出：2
解释：
12 是 2 位数字（位数为偶数） 
345 是 3 位数字（位数为奇数）  
2 是 1 位数字（位数为奇数） 
6 是 1 位数字 位数为奇数） 
7896 是 4 位数字（位数为偶数）  
因此只有 12 和 7896 是位数为偶数的数字
```

示例 2：

```
输入：nums = [555,901,482,1771]
输出：1 
解释： 
只有 1771 是位数为偶数的数字。
```

提示：

* `1 <= nums.length <= 500`
* `1 <= nums[i] <= 10^5`

------

## 题解

对于个数为 `k` 的整数 `n`，满足不等式：

$$
10^{k - 1} \leq n < 10^k
$$

将不等式取对数：

$$
k - 1 \leq \log_{10}n < k
$$

故 $ k = \lfloor \log_{10}(n) \rfloor + 1 $，通过该式子即可得出整数 `n` 的位数 `k`。

### 代码实现

```js
function findNumbers(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const bitLen = Math.floor(Math.log10(nums[i])) + 1;

    if ((bitLen & 1) === 0) {
      count++;
    }
  }

  return count;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $. `n` 为 `nums` 的长度
* 空间复杂度：$ O(1) $.
