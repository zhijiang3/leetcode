# Longest Increasing Subsequence

> 题目地址: [https://leetcode-cn.com/problems/longest-increasing-subsequence/](https://leetcode-cn.com/problems/longest-increasing-subsequence/)

## 题目描述

给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

```
输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
```

**说明:**

* 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
* 你算法的时间复杂度应该为 $O(n^2)$ 。

**进阶:** 你能将算法的时间复杂度降低到 $O(n \log n)$ 吗?

------

## 题解

> [https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/](https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/)

### 方法一：动态规划

#### 代码实现

```js
function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  const dp = new Array(nums.length);
  dp[0] = 1;

  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
    ans = Math.max(ans, dp[i]);
  }

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n^2) $.
* 空间复杂度：$ O(n) $.
