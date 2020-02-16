# Decompress Run-Length Encoded List

> 题目地址: [https://leetcode-cn.com/problems/decompress-run-length-encoded-list/](https://leetcode-cn.com/problems/decompress-run-length-encoded-list/)

## 题目描述

给你一个以行程长度编码压缩的整数列表 `nums` 。

考虑每对相邻的两个元素 `[a, b] = [nums[2*i], nums[2*i+1]]`（其中 `i >= 0` ），每一对都表示解压后有 `a` 个值为 `b` 的元素。

请你返回解压后的列表。

示例：

```
输入：nums = [1,2,3,4]
输出：[2,4,4,4]
解释：第一对 [1,2] 代表着 2 的出现频次为 1，所以生成数组 [2]。
第二对 [3,4] 代表着 4 的出现频次为 3，所以生成数组 [4,4,4]。
最后将它们串联到一起 [2] + [4,4,4] = [2,4,4,4]。
```

提示：

* `2 <= nums.length <= 100`
* `nums.length % 2 == 0`
* `1 <= nums[i] <= 100`

------

## 题解

我们以步长为 2 遍历数组 `nums`，对于当前遍历到的元素 `a` 和 `b`，我们将 `a` 个 `b` 添加进答案中即可。

### 代码实现

```js
function decompressRLEList(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      result.push(nums[i + 1]);
    }
  }

  return result;
}
```

### 复杂度分析

* 时间复杂度：$ O(nm) $. $m$ 是数组 `nums` 中所有下标为偶数的元素之和。
* 空间复杂度：$ O(nm) $.
