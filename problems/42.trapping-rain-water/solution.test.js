import trap from "./solution.js";

test("example 1", () => {
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
});

test("example 2", () => {
  expect(trap([6, 0, 0, 0, 0, 6])).toBe(24);
});

test("example 3", () => {
  expect(trap([6, 0, 3, 3, 0, 6])).toBe(18);
});

test("example 4", () => {
  expect(trap([2, 0, 1, 0, 3, 0, 6])).toBe(8);
});

test("example 5", () => {
  expect(trap([2, 0, 1, 2, 3, 0, 6])).toBe(6);
});

test("example 6", () => {
  expect(trap([2, 0, 1, 2, 0, 0, 6])).toBe(7);
});

test("example 7", () => {
  expect(trap([0, 0, 0, 0, 6, 0, 0])).toBe(0);
});

test("example 8", () => {
  expect(trap([6, 6])).toBe(0);
});

test("example 9", () => {
  expect(trap([1, 0, 0, 6, 0, 6, 0])).toBe(8);
});

test("example 10", () => {
  expect(trap([])).toBe(0);
});

test("example 11", () => {
  expect(trap([8, 2, 1, 3])).toBe(3);
});

test("example 12", () => {
  expect(trap([8, 2, 3, 1])).toBe(1);
});

test("example 13", () => {
  expect(trap([8, 3, 2, 1])).toBe(0);
});

test("example 14", () => {
  expect(trap([8, 1, 2, 3])).toBe(3);
});
