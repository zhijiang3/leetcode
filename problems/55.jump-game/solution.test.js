import canJump from "./solution.js";

test("example 1", () => {
  expect(canJump([2, 3, 1, 1, 4])).toBe(true);
});

test("example 2", () => {
  expect(canJump([3, 2, 1, 0, 4])).toBe(false);
});
