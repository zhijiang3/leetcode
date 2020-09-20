# 子集

> 题目地址: [https://leetcode-cn.com/problems/subsets/](https://leetcode-cn.com/problems/subsets/)

## 题目描述

给定一组**不含重复元素**的整数数组 *nums*，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

```
输入: nums = [1, 2, 3]
输出:
[
  [3],
  [1],
  [2],
  [1, 2, 3],
  [1, 3],
  [2, 3],
  [1, 2],
  []
]
```

------

## 题解

> [https://leetcode-cn.com/problems/subsets/solution/zi-ji-by-leetcode-solution/](https://leetcode-cn.com/problems/subsets/solution/zi-ji-by-leetcode-solution/)

### 二进制迭代法

记原序列中元素的总数为 $n$。原序列中的每个数字 $a_i$ 的状态可能有两种，即「在子集中」和「不在子集中」。我们用 1 表示「在子集中」，0 表示不在子集中，那么每一个子集可以对应一个长度为 $n$ 的 0/1 序列，第 i 位表示 $a_i$ 是否在子集中。

例如，$n = 3$，$a = \{ 5, 2, 9 \}$ 时：

| 0/1序列 | 子集      | 对应的数字 |
|---------|-----------|------------|
| 000     | {}        | 0          |
| 001     | {9}       | 1          |
| 010     | {2}       | 2          |
| 011     | {2, 9}    | 3          |
| 100     | {5}       | 4          |
| 101     | {5, 9}    | 5          |
| 110     | {5, 2}    | 6          |
| 111     | {5, 2, 9} | 7          |

可以发现 0/1 序列对应的二进制数正好从 0 到 $2^n - 1$。我们可以枚举 $[0, 2^n - 1]$，然后在其二进制 0/1 序列当中取数。当我们枚举完所有 $2^n$ 个时，我们也就能构造出所有的子集。

#### 代码实现

```js
function subsets(nums) {
  const ans = [];
  const n = nums.length;
  for (let i = 0; i < (1 << n); ++i) {
    const subset = [];
    for (let j = 0; j < n; ++j) {
      if (i & (1 << j)) subset.push(nums[j]);
    }
    ans.push(subset);
  }
  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n * 2^n) $.
* 空间复杂度：$ O(n) $.

### 回溯算法

#### 代码实现

```js
function dfs(index, nums, subset, ans) {
  if (index === nums.length) {
    ans.push(subset.slice());
    return;
  }

  subset.push(nums[index]);
  // 考虑 nums[index] 的情况
  dfs(index + 1, nums, subset, ans);

  subset.pop();
  // 不考虑 nums[index] 的情况
  dfs(index + 1, nums, subset, ans)
}

function subsets(nums) {
  const ans = [];
  dfs(0, nums, [], ans);
  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n * 2^n) $.
* 空间复杂度：$ O(n) $.
