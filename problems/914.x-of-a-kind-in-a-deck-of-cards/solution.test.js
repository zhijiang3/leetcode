import hasGroupsSizeX from "./solution.js";

test("example 1", () => {
  expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true);
});

test("example 2", () => {
  expect(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false);
});

test("example 3", () => {
  expect(hasGroupsSizeX([1])).toBe(false);
});

test("example 4", () => {
  expect(hasGroupsSizeX([1, 1])).toBe(true);
});

test("example 5", () => {
  expect(hasGroupsSizeX([1, 1, 2, 2, 2, 2])).toBe(true);
});
