# Trapping Rain Water

> 题目地址: [https://leetcode-cn.com/problems/trapping-rain-water/](https://leetcode-cn.com/problems/trapping-rain-water/)

## 题目描述

给定 *n* 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

![rain water trap](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png)

上面是由数组 `[0,1,0,2,1,0,1,3,2,1,2,1]` 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 **感谢 Marcos** 贡献此图。

示例:

```
输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
```

------

## 题解

> [https://leetcode-cn.com/problems/trapping-rain-water/solution/jie-yu-shui-by-leetcode/](https://leetcode-cn.com/problems/trapping-rain-water/solution/jie-yu-shui-by-leetcode/)

### 方法一：暴力

直接按问题描述进行。对于数组中的每个元素，我们找出下雨后水能达到的最高位置，等于两边最大高度的较小值减去当前高度的值。

#### 代码实现

```js
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  const size = height.length;

  let ans = 0;
  for (let i = 1; i < size - 1; ++i) {
    let left = 0, right = 0;
    for (let j = i; j >= 0; --j) { // Search the left part for max bar size
      left = Math.max(left, height[j]);
    }
    for (let j = i; j < size; ++j) { // Search the right part for max bar size
      right = Math.max(right, height[j]);
    }
    ans += Math.min(left, right) - height[i];
  }
  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n^2) $.
* 空间复杂度：$ O(1) $.

### 方法二：动态规划

在暴力方法中，我们仅仅为了找到最大值每次都要向左和向右扫描一次。但是我们可以提前存储这个值。因此，可以通过动态编程解决。

这个概念可以见下图解释：

![](https://pic.leetcode-cn.com/53ab7a66023039ed4dce42b709b4997d2ba0089077912d39a0b31d3572a55d0b-trapping_rain_water.png)

#### 代码实现

```js
/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  const size = height.length;

  if (!size) return 0;

  const left = new Array(size);
  left[0] = height[0]
  for (let i = 1; i < size; ++i) {
    left[i] = Math.max(left[i - 1], height[i]);
  }

  const right = new Array(size);
  right[size - 1] = height[size - 1];
  for (let i = size - 2; i >= 0; --i) {
    right[i] = Math.max(right[i + 1], height[i]);
  }

  let ans = 0;
  for (let i = 1; i < size - 1; ++i) {
    ans += Math.max(left[i], right[i]) - height[i];
  }

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.

### 方法三：栈

我们可以不用像方法 2 那样存储最大高度，而是用栈来跟踪可能储水的最长的条形块。使用栈就可以在一次遍历内完成计算。

我们在遍历数组时维护一个栈。如果当前的条形块小于或等于栈顶的条形块，我们将条形块的索引入栈，意思是当前的条形块被栈中的前一个条形块界定。如果我们发现一个条形块长于栈顶，我们可以确定栈顶的条形块被当前条形块和栈的前一个条形块界定，因此我们可以弹出栈顶元素并且累加答案到 `ans` 。

#### 代码实现

```js
class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  const stack = new Stack();
  let ans = 0, current = 0;

  while (current < height.length) {

    while (!stack.isEmpty() && height[current] > height[stack.peek()]) {
      const top = stack.pop();

      if (stack.isEmpty()) break;

      const distance = current - stack.peek() - 1;
      const boundedHeight = Math.min(height[current], height[stack.peek()]) - height[top];

      ans += distance * boundedHeight;
    }

    stack.push(current++);
  }

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(n) $.
