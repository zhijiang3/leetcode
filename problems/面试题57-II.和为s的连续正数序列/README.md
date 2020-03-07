# 和为s的连续正数序列

> 题目地址: [https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/)

## 题目描述

输入一个正整数 `target` ，输出所有和为 `target` 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

示例 1：

```
输入：target = 9
输出：[[2,3,4],[4,5]]
```

示例 2：

```
输入：target = 15
输出：[[1,2,3,4,5],[4,5,6],[7,8]]
```

**限制：**

* `1 <= target <= 10^5`

------

## 题解

### 滑动窗口

至少两个数相加的和为 `target` 的连续正整数序列，其可取的上界应该为：

$$
n = \lceil \frac{target}{2} \rceil
$$

也就是说连续正整数序列的取值范围为 $[1, n]$。

根据题意，得到其中一个子序列的求和式子：

$$
\begin{aligned}
  sum_{i} &= a_{i} + (a_{i} + 1) + ... + [a_{i} + (n - i)]
\end{aligned}
$$

其中 $a_{i}$ 是连续正整数序列的第一个元素，其值和下标一致，也就是 $a_{i} = i$，化简得到：

$$
sum_{i} = (n - i + 1) \times \frac{i + n}{2}
$$

接着，我们以 `high = n` 作为滑动窗口的右边界，`low = n - 1` 作为滑动窗口的左边界，通过 $sum_{low}$ 公式计算 **得到 `low 到 high` 的和**，接着拿 `sum` 和 `target` 比较：

1. `sum` 和 `target` 相等，则该范围是符合题意的，则 `low` 和 `high` 一起向左滑动
2. `sum` 比 `target` 大，那么我们把最大的数剔除掉，也就是 `high--`
2. `sum` 比 `target` 小，那么我们把左窗口扩大，也就是 `low--`

#### 代码实现

```js
function findContinuousSequence(target) {
  const ans = [];

  let high = Math.ceil(target / 2);
  let low = high - 1;

  const sequence = new Array(high).fill(0).map((num, index) => index + 1);

  while (low > 0) {
    const sum = (high - low + 1) * (low + high) / 2;

    if (sum === target) {
      ans.unshift(sequence.slice(low - 1, high));
      low--;
      high--;
    } else if (sum > target) {
      high--;
    } else if (sum < target) {
      low--;
    }
  }

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $. `n` 为 $\lfloor \frac{target}{2} \rfloor$
* 空间复杂度：$ O(n) $. 除了结果的数组外，还保存了一个 `sequence` 数组
