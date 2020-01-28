# Jump Game

> 题目地址: [https://leetcode-cn.com/problems/jump-game/](https://leetcode-cn.com/problems/jump-game/)

## 题目描述

给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

示例 1:

```
输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
```

示例 2:

```
输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
```

------

## 题解

贪婪算法，在遍历 `nums` 时保存一个最大可跳的次数 `max`，在最后判断最大可跳次数 `max` 是否大于等于最后一个位置 `i` 即可。

### 代码实现

```js
function canJump(nums) {
  if (nums.length === 1) return true;

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (max >= i) {
      max = Math.max(max, nums[i] + i);
    } else {
      return false;
    }
  }

  return true;
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
