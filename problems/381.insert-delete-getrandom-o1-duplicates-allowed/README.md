# O(1) 时间插入、删除和获取随机元素 - 允许重复

> 题目地址: [https://leetcode-cn.com/problems/insert-delete-getrandom-o1-duplicates-allowed](https://leetcode-cn.com/problems/insert-delete-getrandom-o1-duplicates-allowed)

## 题目描述

设计一个支持在 *平均* 时间复杂度 **O(1)** 下， 执行以下操作的数据结构。

**注意: 允许出现重复元素。**

1. `insert(val)`：向集合中插入元素 val。
2. `remove(val)`：当 val 存在时，从集合中移除一个 val。
3. 1getRandom1：从现有集合中随机获取一个元素。每个元素被返回的概率应该与其在集合中的数量呈线性相关。

示例:

```java
// 初始化一个空的集合。
RandomizedCollection collection = new RandomizedCollection();

// 向集合中插入 1 。返回 true 表示集合不包含 1 。
collection.insert(1);

// 向集合中插入另一个 1 。返回 false 表示集合包含 1 。集合现在包含 [1,1] 。
collection.insert(1);

// 向集合中插入 2 ，返回 true 。集合现在包含 [1,1,2] 。
collection.insert(2);

// getRandom 应当有 2/3 的概率返回 1 ，1/3 的概率返回 2 。
collection.getRandom();

// 从集合中删除 1 ，返回 true 。集合现在包含 [1,2] 。
collection.remove(1);

// getRandom 应有相同概率返回 1 和 2 。
collection.getRandom();
```

------

## 题解

### 数组 + Map + 末尾替换

#### 代码实现

```ts
class RandomizedCollection {
  nums: number[];
  map: Map<number, Set<number>>;

  constructor() {
    this.nums = [];
    this.map = new Map();
  }

  insert(val: number): boolean {
    const index = this.nums.length;
    this.nums.push(val);

    if (this.map.has(val)) {
      (this.map.get(val) as Set<number>).add(index);
    } else {
      this.map.set(val, new Set([index]));
    }

    return (this.map.get(val) as Set<number>).size === 1;
  }

  remove(val: number): boolean {
    const indexSet = this.map.get(val);

    if (!indexSet || indexSet.size === 0) return false;

    // 找到该值的第一个索引
    let index: number = -1;
    for (const i of indexSet) {
      index = i;
      break;
    }

    if (index === -1) return false;

    const lastIndex = this.nums.length - 1;
    const lastNum = this.nums[lastIndex];

    (indexSet as Set<number>).delete(index);

    const lastSet = this.map.get(lastNum);

    if (lastSet) {
      lastSet.add(index);
      lastSet.delete(lastIndex);
    }

    this.nums[index] = lastNum;
    this.nums.pop();

    return true;
  }

  getRandom(): number {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
  }
}
```

#### 复杂度分析

* 时间复杂度：$ O(1) $. 操作平均下的时间复杂度
* 空间复杂度：$ O(N) $.
