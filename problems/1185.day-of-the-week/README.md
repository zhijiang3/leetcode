# Day of the Week

> 题目地址: [https://leetcode-cn.com/problems/day-of-the-week/](https://leetcode-cn.com/problems/day-of-the-week/)

## 题目描述

给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。

输入为三个整数：`day`、`month` 和 `year`，分别表示日、月、年。

您返回的结果必须是这几个值中的一个 `{"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}`。

示例 1：

```
输入：day = 31, month = 8, year = 2019
输出："Saturday"
```

示例 2：

```
输入：day = 18, month = 7, year = 1999
输出："Sunday"
```

示例 3：

```
输入：day = 15, month = 8, year = 1993
输出："Sunday"
```
 
提示：

* 给出的日期一定是在 `1971` 到 `2100` 年之间的有效日期。

------

## 题解

### 方法一：计算天数

* `0001年1月1日`是星期天，也就是说，之后过了多少天，那么就是星期几，如`0001年1月4日`，就是星期四
* 闰年有 `366` 天（多出来的一天算在二月），平年有 `365` 天

假设要计算 `2019年8月31日` 的天数，那么总的天数就是：

```
总天数 = (2019 - 1) * 365 + (0001年 ~ 2018年的)闰年天数 + 2019年1月1日 至 2019年8月31日的天数
```

#### 代码实现

```js
/**
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 3200 !==0);
}

function dayOfTheWeek(day, month, year) {
  // 计算闰年
  let leapYearCount = 0;
  for (let i = 1; i < year; i++) {
    if (isLeapYear(i)) leapYearCount++;
  }

  const dayOfMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = 0;
  for (let i = 0; i < month - 1; i++) {
    days += dayOfMonth[i];
  }

  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return dayOfWeek[(year - 1 + leapYearCount + days + day) % 7];
}
```

#### 复杂度分析

* 时间复杂度：$ O(n+m) $. $n$ 为年份, $m$ 为月份
* 空间复杂度：$ O(1) $.

### 方法二：基姆拉尔森计算公式

可使用基姆拉尔森计算公式直接计算星期几，公式如下：

$$
week \equiv day + 2 \times month + \frac{3 \times (month + 1)} {5} + year + \frac{year} {4} - \frac{y} {100} + \frac{y} {400} + 1 \pmod 7
$$

注意：在公式中要把一月和二月看成是上一年的十三月和十四月。

#### 代码实现

```js
function dayOfTheWeek(day, month, year) {
  if (month === 1 || month === 2) {
    month += 12;
    year--;
  }

  const learYearCount = Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);

  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return dayOfWeek[(day + 2 * month + Math.floor(3 * (month + 1) / 5) + year + learYearCount + 1) % 7];
}
```

#### 复杂度分析

* 时间复杂度：$ O(1) $.
* 空间复杂度：$ O(1) $.
