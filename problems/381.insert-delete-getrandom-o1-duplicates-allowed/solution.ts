export default class RandomizedCollection {
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
