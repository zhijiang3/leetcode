import asteroidCollision from "./solution.js";

test("example 1", () => {
  expect(asteroidCollision([5, 10, -5])).toEqual([5, 10]);
});

test("example 2", () => {
  expect(asteroidCollision([8, -8])).toEqual([]);
});

test("example 3", () => {
  expect(asteroidCollision([10, 2, -5])).toEqual([10]);
});

test("example 4", () => {
  expect(asteroidCollision([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2]);
});

test("多次碰撞", () => {
  expect(asteroidCollision([10, 2, -5, -20, 5])).toEqual([-20, 5]);
});
