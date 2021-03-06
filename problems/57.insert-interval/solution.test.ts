import insert from "./solution";

test("示例 1", () => {
  expect(insert([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]]);
});

test("示例 2", () => {
  expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toEqual([[1, 2], [3, 10], [12, 16]]);
});

test("在没有区间和新区间都没有重叠的地方插入", () => {
  expect(insert([[1, 2], [9, 10]], [4, 5])).toEqual([[1, 2], [4, 5], [9, 10]]);
});

test("在某个范围内插入区间", () => {
  expect(insert([[1, 7], [8, 10], [12, 16]], [5, 11])).toEqual([[1, 11], [12, 16]]);
});

test("在开头插入区间", () => {
  expect(insert([[4, 7], [9, 11], [12, 16]], [1, 5])).toEqual([[1, 7], [9, 11], [12, 16]]);
});

test("不正确的输入", () => {
  expect(insert([[1, 3], [2, 5], [3, 7], [8, 10], [12, 16]], [4, 5])).toEqual([[1, 3], [2, 7], [8, 10], [12, 16]]);
});

test("在末尾追加", () => {
  expect(insert([[1, 3], [2, 5], [3, 7], [8, 10], [12, 16]], [13, 20])).toEqual([[1, 3], [2, 5], [3, 7], [8, 10], [12, 20]]);
});
