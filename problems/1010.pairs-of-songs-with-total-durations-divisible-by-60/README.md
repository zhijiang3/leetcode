# Pairs of Songs With Total Durations Divisible by 60

> 题目地址: [https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/](https://leetcode-cn.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/)

## 题目描述

在歌曲列表中，第 `i` 首歌曲的持续时间为 `time[i]` 秒。

返回其总持续时间（以秒为单位）可被 `60` 整除的歌曲对的数量。形式上，我们希望索引的数字 `i < j` 且有 `(time[i] + time[j]) % 60 == 0`。

示例 1：

```
输入：[30,20,150,100,40]
输出：3
解释：这三对的总持续时间可被 60 整数：
(time[0] = 30, time[2] = 150): 总持续时间 180
(time[1] = 20, time[3] = 100): 总持续时间 120
(time[1] = 20, time[4] = 40): 总持续时间 60
```

示例 2：

```
输入：[60,60,60]
输出：3
解释：所有三对的总持续时间都是 120，可以被 60 整数。
```

**提示：**

* `1 <= time.length <= 60000`
* `1 <= time[i] <= 500`

------

## 题解

首先，可以对每首歌的时间模 `60` 得到余数 `r`，那么用 `60 - r` 即可得到一个数 `d` 可以与余数 `r` 组成一对，举个例子，如 `160`：

```
r = 160 % 60 = 40
d = 60 - r = 60 - 40 = 20
也就是和 40 组成一对的是 20
```

接着，假设 `d` 在之前出现过 `2` 次，那么就可以和 `r` 组成 `2`(即，$r + d_{1}, r + d_{2}$ ) 对

```
[..., d, ..., d, ..., r, ...] # 歌曲持续时间, d 是原时间模 60 的结果
[..., 1, ..., 2, ..., _, ...] # 出现次数
```

所以，借助这个思路，要统计持续时间列表中有多少对，只需要找出与余数 `r` 组成一对的数 `d` 出现的次数即可。

**注意：** 在边界的情况，当`r = 0` 时，`d = 60`，因为 `d` 在之前已经模了 `60`，理应只有 `0 ~ 59`，所以 `d = 60` 是不合理的，我们可以再把 `d` 模 `60`，也就是把 `d` 看作 `0`。

### 代码实现

```js
function numPairsDivisibleBy60(time) {
  let sum = 0;
  const count = new Array(60).fill(0);

  for (let num of time) {
    const r = num % 60;
    const d = 60 - r;
    sum += count[d % 60];
    count[r]++;
  }

  return sum;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $. 空间消耗是常量时间，也就是每次调用都是 `60`
