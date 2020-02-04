# Day of the Year

> 题目地址: [https://leetcode-cn.com/problems/day-of-the-year/](https://leetcode-cn.com/problems/day-of-the-year/)

## 题目描述

给你一个按 `YYYY-MM-DD` 格式表示日期的字符串 `date`，请你计算并返回该日期是当年的第几天。

通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2 天，依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。

示例 1：

```
输入：date = "2019-01-09"
输出：9
```

示例 2：

```
输入：date = "2019-02-10"
输出：41
```

示例 3：

```
输入：date = "2003-03-01"
输出：60
```

示例 4：

```
输入：date = "2004-03-01"
输出：61
```

提示：

* `date.length == 10`
* `date[4] == date[7] == '-'`，其他的 `date[i]` 都是数字。
* `date` 表示的范围从 1900 年 1 月 1 日至 2019 年 12 月 31 日。

------

## 题解

解题思路：

* 前 `m - 1` 个月天数的总和 + 当前月的天数
* 需要注意闰年的二月有 `29` 天

### 代码实现

```js
function dayOfYear(string) {
  const year = Number(date[0] + date[1] + date[2] + date[3]);
  const isLearYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  const month = Number(date[5] + date[6]);

  let day = Number(date[8] + date[9]);
  const months = [31, isLearYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let m = 0; m < month - 1; m++) {
    day += months[m];
  }

  return day;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $. $n$ 是月份
* 空间复杂度：$ O(1) $. 每次都需要一个大小为 `12` 的月份数组，是常量空间
