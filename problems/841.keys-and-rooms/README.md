# 钥匙和房间

> 题目地址: [https://leetcode-cn.com/problems/keys-and-rooms/](https://leetcode-cn.com/problems/keys-and-rooms/)

## 题目描述

有 `N` 个房间，开始时你位于 `0` 号房间。每个房间有不同的号码：`0，1，2，...，N-1`，并且房间里可能有一些钥匙能使你进入下一个房间。

在形式上，对于每个房间 `i` 都有一个钥匙列表 `rooms[i]`，每个钥匙 `rooms[i][j]` 由 `[0,1，...，N-1]` 中的一个整数表示，其中 `N = rooms.length`。 钥匙 `rooms[i][j] = v` 可以打开编号为 `v` 的房间。

最初，除 `0` 号房间外的其余所有房间都被锁住。

你可以自由地在房间之间来回走动。

如果能进入每个房间返回 `true`，否则返回 `false`。

示例 1：

```
输入: [[1],[2],[3],[]]
输出: true
解释:  
我们从 0 号房间开始，拿到钥匙 1。
之后我们去 1 号房间，拿到钥匙 2。
然后我们去 2 号房间，拿到钥匙 3。
最后我们去了 3 号房间。
由于我们能够进入每个房间，我们返回 true。
```

示例 2：

```
输入：[[1,3],[3,0,1],[2],[0]]
输出：false
解释：我们不能进入 2 号房间。
```

提示：

- `1 <= rooms.length <= 1000`
- `0 <= rooms[i].length <= 1000`
- 所有房间中的钥匙数量总计不超过 `3000`。

------

## 题解

题目可以看成是一张图，房间可以看成是节点，其中房间内的钥匙可以看成是两个节点相连的边，那么 **去了每个房间** 等价于 **遍历了所有的节点**。

### 代码实现

```js
function canVisitAllRooms(rooms) {
  const visited = new Array(rooms.length).fill(false);
  const stack = [];
  let nums = 0;

  stack.push(rooms[0]);
  visited[0] = true;

  while (stack.length) {
    const keys = stack.pop();
    nums++;

    keys.forEach(key => {
      if (visited[key]) return;

      stack.push(rooms[key]);
      visited[key] = true;
    });
  }

  return nums === rooms.length;
}
```

### 复杂度分析

* 时间复杂度：$ O(n + m) $. `n` 为房间数量，`m` 为房间中总钥匙的数量
* 空间复杂度：$ O(n) $.
