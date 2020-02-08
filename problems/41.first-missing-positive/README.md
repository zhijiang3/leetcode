# First Missing Positive

> 题目地址: [https://leetcode-cn.com/problems/first-missing-positive/](https://leetcode-cn.com/problems/first-missing-positive/)

## 题目描述

给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

示例 1:

```
输入: [1,2,0]
输出: 3
```

示例 2:

```
输入: [3,4,-1,1]
输出: 2
```

示例 3:

```
输入: [7,8,9,11,12]
输出: 1
```

**说明:**

你的算法的时间复杂度应为 $O(n)$，并且只能使用常数级别的空间。

------

## 题解

根据题意，我们可以得出返回值 `n` 的取值范围：

$$
n \in [1, length + 1]
$$

其中 `length` 是给定数组 `nums` 的长度，所以在数组 `nums` 内对于 `nums[i] < 1` 或 `nums[i] > length + 1` 的数，我们可以不予考虑。

由于题目要求空间复杂度要在常数级别，所以算法要对原数组进行操作。

在上述条件下，我们可以**利用数组的合法值映射到数组的索引去**，如数组 `[3, 0, 1]`：

```
nums  = [3, 0, 1]
index = [empty, empty, empty]
---------------------------------
         ↓
nums  = [3, 0, 1]
index = [empty, empty, T]
                       ↑
数字3 映射到 索引2 的位置，对 索引2 进行标记
---------------------------------
            ↓
nums  = [3, 0, 1]
index = [empty, empty, T]
数字0 不合法，所以我们不予考虑
---------------------------------
               ↓
nums  = [3, 0, 1]
index = [T, empty, T]
         ↑
数字1 映射到 索引0 的位置，对 索引0 进行标记
---------------------------------
然后我们再次顺序遍历数组，第一个没有标记的索引，就是我们要找的最小正整数，这里是 2
```

所以这里就出现第二个问题，**怎么对原数组进行标记**，有两种方法：

1. 数组中的合法值所映射的索引位置，把索引位置的值转换成字符串，如：`[9, 3, 6, 5, 1] => ["9", 3, "6", 5, "1"]`
2. 对数组不合法的值统一置为 `0.1`(或任意小数)，然后把数组中的合法值所映射的索引位置，其值置为 `负数`，如：`[9, 3, 6, 5, 1] => [0.1, 3, 0.1, 5, 1] => [-0.1, 3, -0.1, 5, -1]`

### 代码实现

#### 方法一

```js
function firstMissingPositive(nums) {
  // 对合法值映射的索引字符串化
  for (let i = 0; i < nums.length; i++) {
    const num = Number(nums[i]);
    if (num < 1 || num > nums.length) continue;

    nums[num - 1] = String(nums[num - 1]);
  }

  // 返回结果
  for (let j = 0; j < nums.length; j++) {
    if (typeof nums[j] !== 'string') return j + 1;
  }

  return nums.length + 1;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $. 至少要遍历数组 2 次
* 空间复杂度：$ O(1) $.

#### 方法二

```js
function firstMissingPositive(nums) {
  // 把不合法的值设置为 0.5
  for (let i = 0; i < nums.length; i++) {
    const num = Number(nums[i]);
    if (num < 1 || num > nums.length) nums[i] = 0.5;
  }

  // 对合法值映射到索引
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    if (num >= 1) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }

  // 返回结果
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return i + 1;
  }
  return nums.length + 1;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $. 至少要遍历数组 3 次
* 空间复杂度：$ O(1) $.
