# 插入区间

> 题目地址: [https://leetcode-cn.com/problems/insert-interval/](https://leetcode-cn.com/problems/insert-interval/)

## 题目描述

给出一个*无重叠*的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

示例 1：

```
输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
```

示例 2：

```
输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
```

**注意：**输入类型已在 2019 年 4 月 15 日更改。请重置为默认代码定义以获取新的方法签名。

------

## 题解

找到第一个需要合并的位置 `firstIndex`（指第一个与新插入的值有重叠的区间），然后从 `firstIndex` 一直合并所有与之重叠的区间（这个合并过程是连续的），最后剩下的都是不重叠的，直接追加至答案后即可。

### 代码实现

```ts
type Interval = [number, number];

function binarySearch(nums: Interval[], target: number, index = 0): number {
  let low = 0, high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid][index] > target) {
      high = mid - 1;
    } else if (nums[mid][index] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return low;
}

function getFirstMergeIndex(intervals: Interval[], newInterval: Interval): number {
  let index = 0;

  while (index < intervals.length) {
    if (intervals[index][0] <= newInterval[0] && newInterval[0] <= intervals[index][1]) return index;

    index++;
  }

  return index;
}

export default function insert(intervals: Interval[], newInterval: Interval): Interval[] {
  intervals.splice(binarySearch(intervals, newInterval[0]), 0, newInterval);

  let index = getFirstMergeIndex(intervals, newInterval);

  let ans = intervals.slice(0, index);

  const mergeInterval = intervals[index];
  while (index + 1 < intervals.length && mergeInterval[1] >= intervals[index + 1][0]) {
    mergeInterval[1] = Math.max(mergeInterval[1], intervals[++index][1]);
  }
  ans.push(mergeInterval);

  return ans.concat(intervals.slice(index + 1));
}
```

### 复杂度分析

* 时间复杂度：$ O(o) $.
* 空间复杂度：$ O(1) $. 不算结果数组的空间
