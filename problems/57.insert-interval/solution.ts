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
