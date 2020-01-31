# Number of Recent Calls

> 题目地址: [https://leetcode-cn.com/problems/number-of-recent-calls/](https://leetcode-cn.com/problems/number-of-recent-calls/)

## 题目描述

写一个 `RecentCounter` 类来计算最近的请求。

它只有一个方法：`ping(int t)`，其中 `t` 代表以毫秒为单位的某个时间。

返回从 3000 毫秒前到现在的 `ping` 数。

任何处于 `[t - 3000, t]` 时间范围之内的 `ping` 都将会被计算在内，包括当前（指 `t` 时刻）的 `ping`。

保证每次对 `ping` 的调用都使用比之前更大的 `t` 值。
 
示例：

```
输入：inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
输出：[null,1,2,3,3]
```

提示：

* 每个测试用例最多调用 `10000` 次 `ping`。
* 每个测试用例会使用严格递增的 `t` 值来调用 `ping`。
* 每次调用 `ping` 都有 `1 <= t <= 10^9`。

------

## 题解

首先，要记录调用 `ping` 的时间 `t`，以便下次调用时统计次数。

其次，**因为 `t` 是递增的，所以小于 `t - 3000` 的调用时间都不会再用到**，所以在调用 `ping` 的时候，可以把小于 `t - 3000` 的时间的记录去掉。

故可以考虑使用队列来处理这种先进先出（FIFO, First-In-First-Out）的情况（在 JS 中也可以直接使用数组）。

### 代码实现

```js
var RecentCounter = function() {
  this.queue = new Queue();
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.queue.enqueue(t);

  while (this.queue.peek() < t - 3000) {
    this.queue.dequeue();
  }

  return this.queue.size();
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```

### 复杂度分析

* 时间复杂度：$ O(n) $. $n$ 是 `ping` 的次数
* 空间复杂度：$ O(q) $. $q$ 是存储的队列长度
