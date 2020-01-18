# Decrypt String from Alphabet to Integer Mapping

> 题目地址: [https://leetcode-cn.com/problems/decrypt-string-from-alphabet-to-integer-mapping/](https://leetcode-cn.com/problems/decrypt-string-from-alphabet-to-integer-mapping/)

## 题目描述

给你一个字符串 `s`，它由数字（`'0'` - `'9'`）和 `'#'` 组成。我们希望按下述规则将 `s` 映射为一些小写英文字符：

* 字符（`'a'` - `'i'`）分别用（`'1'` - `'9'`）表示。
* 字符（`'j'` - `'z'`）分别用（`'10#'` - `'26#'`）表示。

返回映射之后形成的新字符串。

题目数据保证映射始终唯一。

示例 1：

```
输入：s = "10#11#12"
输出："jkab"
解释："j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
```

示例 2：

```
输入：s = "1326#"
输出："acz"
```

示例 3：

```
输入：s = "25#"
输出："y"
```

示例 4：

```
输入：s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
输出："abcdefghijklmnopqrstuvwxyz"
```

提示：

* `1 <= s.length <= 1000`
* `s[i]` 只包含数字（`'0'`-`'9'`）和 `'#'` 字符。
* `s` 是映射始终存在的有效字符串。

------

## 题解

我们反向遍历 `s`，当遇到 `s[i]` 为 `#` 时，直接向前取 2 位，即 `i - 1` 和 `i - 2`：

```
"1 0 # 1 2 3 1 2 #" # 遇到 ‘#’
                 ↑
                 i

"1 0 # 1 2 3 1 2 #" # 直接取 ‘i - 1’ 和 ‘i - 2’ 也就是 12
             ↑ ↑ ↑

"1 0 # 1 2 3 1 2 #" # 继续遍历
           ↑
           i
```

取出前 2 位后，我们可以使用字符串转整数的方法得到对应的字符的 ASCII 码，从而得到字符本身，ASCII 码映射表如下：

| 获取的整数 | 字母 | ASCII 十进制 |
|------------|------|--------------|
| 1          | a    | 97 + 0       |
| ...        |      |              |
| 9          | i    | 97 + 8       |
| 10#        | j    | 97 + 9       |
| ...        |      |              |
| 26#        | z    | 97 + 25      |

### 代码实现

```js
function freqAlphabets(s) {
  let res = "";

  let i = s.length - 1;
  while (i >= 0) {
    if (s[i] === "#") {
      res = String.fromCharCode(96 + Number(`${s[i - 2]}${s[i - 1]}`)) + res;
      i -= 2;
    } else {
      res = String.fromCharCode(96 + Number(s[i])) + res;
    }

    i -= 1;
  }

  return res;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $. `n` 为字符串 `s` 的长度
* 空间复杂度：$ O(1) $.
