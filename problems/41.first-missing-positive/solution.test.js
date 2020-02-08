import firstMissingPositive from "./solution.js";

test("example 1", () => {
  expect(firstMissingPositive([1, 2, 0])).toBe(3);
});

test("example 2", () => {
  expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
});

test("example 3", () => {
  expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
});

test("空值应该返回 1", () => {
  expect(firstMissingPositive([])).toBe(1);
});

test("输入的值全部满足最小正整数", () => {
  expect(firstMissingPositive([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(10);
});

test("重复项", () => {
  expect(firstMissingPositive([3, 1, 2, 1, 5, -32, 4, 31, 22, 1, 2])).toBe(6);
});
