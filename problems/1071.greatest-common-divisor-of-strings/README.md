# Greatest Common Divisor of Strings

> 题目地址: [https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/](https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/)

## 题目描述

对于字符串 `S` 和 `T`，只有在 `S = T + ... + T`（`T` 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。

返回最长字符串 `X`，要求满足 `X` 能除尽 `str1` 且 `X` 能除尽 `str2`。

示例 1：

```
输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"
```

示例 2：

```
输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"
```

示例 3：

```
输入：str1 = "LEET", str2 = "CODE"
输出：""
```

**提示：**

* `1 <= str1.length <= 1000`
* `1 <= str2.length <= 1000`
* `str1[i]` 和 `str2[i]` 为大写英文字母

------

## 题解

> [https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/solution/zi-fu-chuan-de-zui-da-gong-yin-zi-by-leetcode-solu/](https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/solution/zi-fu-chuan-de-zui-da-gong-yin-zi-by-leetcode-solu/)

需要知道一个性质：**如果 `str1` 和 `str2` 拼接后等于 `str2` 和 `str1` 拼接起来的字符串（注意拼接顺序不同），那么一定存在符合条件的字符串 `X`。**

如果字符串 `X` 符合条件，那么：

$$
\begin{aligned}
       str1 &= X + X + ... + X = n \times X \\\\
       str2 &= X + X + ... + X = m \times X \\\\
\end{aligned}
$$

把字符串拼接起来：

$$
\begin{aligned}
     str1 + str2 &= str2 + str1 \\\\
(n + m) \times X &= (m + n) \times X
\end{aligned}
$$

可以看出是一致的，对于不符合条件的 `X` 是不存在的，感兴趣的可以自己证明。

接下来是要找出这个 `X`，以 `str1 = "ABABABABAB", str2 = "ABAB"` 为例，我们借助辗转相除法的概念，用 `str1` 去模（就是重复去掉相同的字符） `str2`：

```
str1 % str2 = "ABABABABAB" - "ABAB" - "ABAB" - ... = "AB"
```

得到的 `"AB"` 就是我们要找的 `X`。

### 代码实现

```js
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
function gcd(num1, num2) {
  while (num2) {
    const prev = num1;
    num1 = num2;
    num2 = prev % num2;
  }

  return num1;
}

function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  return str1.substring(0, gcd(str1.length, str2.length));
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.字符串拼接比较是否相等需要 $O(n)$ 的时间复杂度，求两个字符串长度的最大公约数需要 $O(\log n)$ 的时间复杂度，所以总时间复杂度为 $O(n + \log n) = O(n)$ 。
* 空间复杂度：$ O(n) $.程序运行时建立了中间变量用来存储 `str1` 与 `str2` 的相加结果。
