import findNumbers from "./solution.js";

test("example 1", () => {
  expect(findNumbers([12, 345, 2, 6, 7896])).toBe(2);
});

test("example 2", () => {
  expect(findNumbers([555, 901, 482, 1771])).toBe(1);
});
