# Guess Number Higher or Lower

> 题目地址: [https://leetcode-cn.com/problems/guess-number-higher-or-lower/](https://leetcode-cn.com/problems/guess-number-higher-or-lower/)

## 题目描述

我们正在玩一个猜数字游戏。 游戏规则如下：
我从 **1** 到 **n** 选择一个数字。 你需要猜我选择了哪个数字。
每次你猜错了，我会告诉你这个数字是大了还是小了。
你调用一个预先定义好的接口 `guess(int num)`，它会返回 3 个可能的结果（`-1`，`1` 或 `0`）：

```
-1 : 我的数字比较小
 1 : 我的数字比较大
 0 : 恭喜！你猜对了！
```

示例 :

```
输入: n = 10, pick = 6
输出: 6
```

------

## 题解

### 二分查找

#### 代码实现

```js
function guessNumber(n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const res = guess(mid);

    switch (res) {
      case -1:
        high = mid - 1;
        break;
      case 1:
        low = mid + 1;
        break;
      case 0:
        return mid;
    }
  }

  return -1;
}
```

#### 复杂度分析

* 时间复杂度：$ O(\log n) $.
* 空间复杂度：$ O(1) $.
