# X of a Kind in a Deck of Cards

> 题目地址: [https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/)

## 题目描述

给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 `X`，使我们可以将整副牌按下述规则分成 1 组或更多组：

* 每组都有 `X` 张牌。
* 组内所有的牌上都写着相同的整数。

仅当你可选的 `X >= 2` 时返回 `true`。

示例 1：

```
输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
```

示例 2：

```
输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。
```

示例 3：

```
输入：[1]
输出：false
解释：没有满足要求的分组。
```

示例 4：

```
输入：[1,1]
输出：true
解释：可行的分组是 [1,1]
```

示例 5：

```
输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]
```

**提示：**

* `1 <= deck.length <= 10000`
* `0 <= deck[i] < 10000`

------

## 题解

思路：

1. 首先把所有相同的卡牌收集起来
2. 对收集后的卡牌进行分组

这里的分组（也就是题目中 `X` 的取值）是关键，首先不难想到的是可以通过暴力枚举 2 ~ 10000 逐个逐个判断能否把收集的每个卡牌数量整除。

当然还有比较好的方法求出 `X`，**对于收集的卡牌数量，其所有不重复卡牌数量的公约数，都可以作为题目中的 `X`**。

如：`[1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2]`，**其中 卡牌1 有 8 张，卡牌2 有 4 张**，8 和 4 的公约数有：`1, 2, 4`，所以我们可以把卡牌分成：

```
X = 1, 不符合条件题意
X = 2, 每组有2张，4组卡牌1 和 2组卡牌2，如下所示：
  [1, 1] [1, 1] [1, 1] [1, 1] [2, 2] [2, 2]
X = 4, 每组有4张，2组卡牌1 和 1组卡牌2，如下所示：
  [1, 1, 1, 1] [1, 1, 1, 1] [2, 2, 2, 2]
```

所以只要**公约数的值大于等于2**，那么对于给定的卡牌，肯定可以找到一个 `X` 满足题目要求。

### 代码实现

```js
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function gcd(a, b) {
  while (b) {
    const c = a % b;

    a = b;
    b = c;
  }

  return a;
}

/**
 * @param {number[]} deck
 * @return {boolean}
 */
function hasGroupsSizeX(deck) {
  const m = new Map();

  for (let n of deck)
    m.set(n, m.has(n) ? m.get(n) + 1 : 1);

  let x = 0;
  for (let n of m.keys())
    x = gcd(m.get(n), x);

  return x >= 2;
}
```

### 复杂度分析

* 时间复杂度：$ O(n \lg n) $.
* 空间复杂度：$ O(n) $.
