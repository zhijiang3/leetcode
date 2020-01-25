# Maximum Product Subarray

> 题目地址: [https://leetcode-cn.com/problems/maximum-product-subarray/](https://leetcode-cn.com/problems/maximum-product-subarray/)

## 题目描述

给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。

示例 1:

```
输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
```

示例 2:

```
输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
```

------

## 题解

### 动态规划

设 `f[i]` 表示长度为 `i` 的子序列的**最大乘积**，`b[i]` 表示长度为 `i` 的子序列的**最小乘积**，那么则有：

```js
// 这里是要连续的，所以需要和 nums[i] 对比
f[i] = Math.max(f[i - 1] * nums[i], nums[i]);
b[i] = Math.min(b[i - 1] * nums[i], nums[i]);
```

上述情况是对于 `nums[i] >= 0` 的情况，当遇到 `nums[i] < 0` 时，`最大乘积 * 负数 = 最小乘积`，反之亦然，所以需要把 `f[i]` 和 `b[i]` 乘积的结果互换。

#### 代码实现

```js
function maxProduct(nums) {
  const f = [];
  const b = [];

  f[0] = nums[0];
  b[0] = nums[0];
  let max = nums[0] || 0;

  for (let i = 1 ; i < nums.length; i++) {
    if (nums[i] >= 0) {
      f[i] = Math.max(f[i - 1] * nums[i], nums[i]);
      b[i] = Math.min(b[i - 1] * nums[i], nums[i]);
    } else {
      // 交换 b[i - 1] 和 f[i - 1]
      f[i] = Math.max(b[i - 1] * nums[i], nums[i]);
      b[i] = Math.min(f[i - 1] * nums[i], nums[i]);
    }
    max = Math.max(f[i], max);
  }

  return max;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $. `n` 为 `nums` 的长度
* 空间复杂度：$ O(n) $.
