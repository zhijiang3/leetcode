import checkIfExist from "./solution.js";

test("example 1", () => {
  expect(checkIfExist([10, 2, 5, 3])).toBe(true);
});

test("example 2", () => {
  expect(checkIfExist([7, 1, 14, 11])).toBe(true);
});

test("example 3", () => {
  expect(checkIfExist([3, 1, 7, 11])).toBe(false);
});
