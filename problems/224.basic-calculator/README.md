# Basic Calculator

> 题目地址: [https://leetcode-cn.com/problems/basic-calculator/](https://leetcode-cn.com/problems/basic-calculator/)

## 题目描述

实现一个基本的计算器来计算一个简单的字符串表达式的值。

字符串表达式可以包含左括号 `(` ，右括号 `)`，加号 `+` ，减号 `-`，**非负整数**和空格 ` `。

示例 1:

```
输入: "1 + 1"
输出: 2
```

示例 2:

```
输入: " 2-1 + 2 "
输出: 3
```

示例 3:

```
输入: "(1+(4+5+2)-3)+(6+8)"
输出: 23
```

说明：

* 你可以假设所给定的表达式都是有效的。
* 请不要使用内置的库函数 `eval`。

------

## 题解

### 方法一：栈 和 运算符优先级

首先定义一个**操作数栈**和**运算符栈**，然后定义操作符的优先级，如下：

| operate | priority              |
|---------|-----------------------|
| +       | 1                     |
| -       | 1                     |
| (       | 之后的运算符优先级 + 100 |
| )       | 之后的运算符优先级 - 100 |

把操作数添加到操作数栈，运算符则添加到运算符栈，**在添加运算符之前，需要判断运算符栈内的优先级是否比当前要添加的高，如果运算符栈内的优先级比当前的运算符要高，则说明需要先对运算符栈内进行计算**。

#### 代码实现

```js
/**
 * 取出操作数的顶和次顶与运算符的栈顶进行运算
 * 并把结果放入操作数栈中
 * @param {number[]} operandsStack 操作数
 * @param {*[]} operatorStack 运算符
 */
function compute(operandsStack = [], operatorStack = []) {
  const opt = operatorStack.pop();
  const a = operandsStack.pop();
  const b = operandsStack.pop();

  switch (opt.operate) {
    case "+":
      operandsStack.push(b + a);
      break;
    case "-":
      operandsStack.push(b - a);
      break;
  }
}

/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  const operandsStack = [];
  const operatorStack = [];
  let basicPriority = 0;

  let current = 0;
  while (current < s.length) {
    let char = s[current];

    // 遇到开括号增加运算符优先级
    if (char === "(") {
      basicPriority += 100;

      // 继续遍历
      current++;
      continue;
    }

    // 遇到闭括号降低运算符优先级
    if (char === ")") {
      basicPriority -= 100;

      // 继续遍历
      current++;
      continue;
    }

    // 获取多个数字
    const NUMBERS_REG = /[0-9]/;
    if (NUMBERS_REG.test(char)) {
      let numbers = "";

      while (NUMBERS_REG.test(char)) {
        numbers += char;
        char = s[++current];
      }

      operandsStack.push(Number(numbers));
      continue;
    }

    // 如果是运算符
    const OPERATOR_REG = /(\+|\-)/;
    if (OPERATOR_REG.test(char)) {

      // 先比较当前要添加的运算符和运算符栈内的优先级，把高的拿出来先运算
      const newPriority = basicPriority + 1;
      while (operatorStack.length !== 0 && newPriority <= operatorStack[operatorStack.length - 1].priority) {
        compute(operandsStack, operatorStack);
      }

      operatorStack.push({
        operate: char,
        priority: newPriority
      });

      current++;

      continue;
    }

    current++;
  }

  // 计算最终结果
  while (operatorStack.length !== 0) {
    compute(operandsStack, operatorStack);
  }

  return operandsStack.pop() || 0;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
