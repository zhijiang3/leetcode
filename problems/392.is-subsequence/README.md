# Is Subsequence

> 题目地址: [https://leetcode-cn.com/problems/is-subsequence/](https://leetcode-cn.com/problems/is-subsequence/)

## 题目描述

给定字符串 `s` 和 `t` ，判断 `s` 是否为 `t` 的子序列。

你可以认为 `s` 和 `t` 中仅包含英文小写字母。字符串 `t` 可能会很长（`0 <= t <= 5 * 10^5`），而 `s` 是个短字符串（`0 <= s <= 10^3`）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

示例 1:

```
输入：s = "abc", t = "ahbgdc"
输出：true
```

示例 2:

```
输入：s = "axc", t = "ahbgdc"
输出：false
```

后续挑战 :

如果有大量输入的 S，称作S1, S2, ... , Sk 其中 `k >= 10^8`，你需要依次检查它们是否为 `T` 的子序列。在这种情况下，你会怎样改变代码？

------

## 题解

### 双指针

一个指针记录短字符串 `s` 的位置，一个指针记录长字符串 `t` 的位置，如果走完长字符串 `t` 后，短字符串 `s` 也走完了，那么说明 `s` 是 `t` 的子序列，如：`s = "abc", t = "ahbgdc"`

```
    ↓                     ↓
s = a b c           s = a b c
t = a h b g d c     t = a h b g d c
    ↑                   ↑
# 因为 a == a, 所以 s 的指针要移到下一个位置

      ↓
s = a b c
t = a h b g d c
      ↑
# 因为 b != h, 所以 s 的指针不移动

      ↓                     ↓
s = a b c           s = a b c
t = a h b g d c     t = a h b g d c
        ↑                   ↑
# 因为 b == b, 所以 s 指针移动到下一个位置

        ↓
s = a b c
t = a h b g d c
          ↑
# 因为 c != g, 所以 s 的指针不移动

        ↓
s = a b c
t = a h b g d c
            ↑
# 因为 c != d, 所以 s 的指针不移动

        ↓                     ↓
s = a b c           s = a b c
t = a h b g d c     t = a h b g d c
              ↑                   ↑
# 因为 b == b, 所以 s 指针移动到下一个位置

# 可见, s 的指针已经走完，所以 s 是 t 的子序列
```

#### 代码实现

```js
function isSubsequence(s, t) {
  let j = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) j++;
    if (s.length === j) return true;
  }

  return s.length === j;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $. `n` 为 `t` 的长度
* 空间复杂度：$ O(1) $.
