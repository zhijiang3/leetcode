import canVisitAllRooms from "./solution.js";

test("示例 1", () => {
  expect(canVisitAllRooms([[1], [2], [3], []])).toBe(true);
});

test("示例 2", () => {
  expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toBe(false);
});

test("测试空值", () => {
  expect(canVisitAllRooms([[]])).toBe(true);
  expect(canVisitAllRooms([[], [], []])).toBe(false);
});
