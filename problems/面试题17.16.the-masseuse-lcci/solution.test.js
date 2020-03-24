import massage from "./solution.js";

test("example 1", () => {
  expect(massage([1, 2, 3, 1])).toBe(4);
});

test("example 2", () => {
  expect(massage([2, 7, 9, 3, 1])).toBe(12);
});

test("example 3", () => {
  expect(massage([2, 1, 4, 5, 3, 1, 1, 3])).toBe(12);
});
