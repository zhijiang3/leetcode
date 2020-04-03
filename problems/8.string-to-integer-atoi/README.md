# String to Integer (atoi)

> 题目地址: [https://leetcode-cn.com/problems/string-to-integer-atoi/](https://leetcode-cn.com/problems/string-to-integer-atoi/)

## 题目描述

请你来实现一个 `atoi` 函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。接下来的转化规则如下：

* 如果第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字字符组合起来，形成一个有符号整数。
* 假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成一个整数。
* 该字符串在有效的整数部分之后也可能会存在多余的字符，那么这些字符可以被忽略，它们对函数不应该造成影响。

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换，即无法进行有效转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0 。

**提示：**

* 本题中的空白字符只包括空格字符 `' '`。
* 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−$2^{31}$, $2^{31}$ − 1]。如果数值超过这个范围，请返回 INT_MAX ($2^{31}$ − 1) 或 INT_MIN (−$2^{31}$) 。

示例 1:

```
输入: "42"
输出: 42
```

示例 2:

```
输入: "   -42"
输出: -42
解释: 第一个非空白字符为 '-', 它是一个负号。
     我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
```

示例 3:

```
输入: "4193 with words"
输出: 4193
解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
```

示例 4:

```
输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
     因此无法执行有效的转换。
```

示例 5:

```
输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。 
     因此返回 INT_MIN (−231) 。
```

------

## 题解

### 方法一：直接实现

#### 代码实现

```js
/**
 * @param {string} char
 * @return {boolean}
 */
function isNumber(char) {
  return /^[0-9]$/.test(char);
}

/**
 * @param {string} char
 * @return {boolean}
 */
function isSign(char) {
  return /^(\-|\+)$/.test(char);
}

/**
 * @param {string} char
 * @return {boolean}
 */
function isSpace(char) {
  return char === " ";
}

const MAX_INTEGER = 2147483647;
const MIN_INTEGER = -2147483648;

/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
  let ans = "";

  let current = 0, char = str[current];

  // 清理开头空格
  while (isSpace(char) && current < str.length)
    char = str[++current];

  // 检查正负号
  if (isSign(char)) {
    ans += char;
    char = str[++current];
  }

  if (!isNumber(char)) return 0;

  // 收集数字
  while (isNumber(char) && current < str.length) {
    ans += char;
    char = str[++current];
  }

  ans = Number(ans);

  if (ans > MAX_INTEGER) return MAX_INTEGER;
  if (ans < MIN_INTEGER) return MIN_INTEGER;

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.

### 方法二：正则匹配

#### 代码实现

```js
const MAX_INTEGER = 2147483647;
const MIN_INTEGER = -2147483648;

/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
  const res = str.match(/^(?:\s)*([+-]?[0-9]+)/);

  if (!res) return 0;

  const ans = Number(res[1] || 0);

  if (ans > MAX_INTEGER) return MAX_INTEGER;
  if (ans < MIN_INTEGER) return MIN_INTEGER;

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.

### 方法三：自动机

> [https://leetcode-cn.com/problems/string-to-integer-atoi/solution/zi-fu-chuan-zhuan-huan-zheng-shu-atoi-by-leetcode-/](https://leetcode-cn.com/problems/string-to-integer-atoi/solution/zi-fu-chuan-zhuan-huan-zheng-shu-atoi-by-leetcode-/)

本题可以建立如下图所示的自动机：

![](https://assets.leetcode-cn.com/solution-static/8_fig1.PNG)

我们也可以用下面的表格来表示这个自动机：


| state  | " "   | +/-    | number | other |
|:-------|-------|--------|--------|-------|
| **start**  | start | signed | number | end   |
| **signed** | end   | end    | number | end   |
| **number** | end   | end    | number | end   |
| **end**    | end   | end    | end    | end   |

接下来编程部分就非常简单了：我们只需要把上面这个状态转换表抄进代码即可。

另外自动机也需要记录当前已经输入的数字，只要在状态为 `number` 时，更新我们输入的数字，即可最终得到输入的数字。

#### 代码实现

```js
const MAX_INTEGER = 2147483647;
const MIN_INTEGER = -2147483648;

class Automaton {
  constructor() {
    this.ans = 0;
    this.sign = 1;
    this.state = "start";
    this.table = {
      "start": ["start", "signed", "number", "end"],
      "signed": ["end", "end", "number", "end"],
      "number": ["end", "end", "number", "end"],
      "end": ["end", "end", "end", "end"]
    };
  }

  /**
   * @param {string} char
   */
  get(char) {
    this.state = this.table[this.state][this.getCol(char)];

    if (this.state === "signed") {
      this.sign = char === "-" ? -1 : 1;
    } else if (this.state === "number") {
      const ans = this.ans * 10 + (+char);
      this.ans = this.sign === 1 ? Math.min(ans, MAX_INTEGER) : Math.min(ans, -MIN_INTEGER);
    }
  }

  /**
   * @param {string} char
   * @return {number}
   */
  getCol(char) {
    if (char === " ") return 0;
    if (char === "+" || char === "-") return 1;
    if (/^[0-9]$/.test(char)) return 2;

    return 3;
  }
}

/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str){
  const automaton = new Automaton();

  for (let c of str) {
    automaton.get(c);
  }

  // -0 === 0
  return automaton.ans === 0 ? 0 : automaton.sign * automaton.ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
