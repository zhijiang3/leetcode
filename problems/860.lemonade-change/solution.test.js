import lemonadeChange from "./solution.js";

test("example 1", () => {
  expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
});

test("example 2", () => {
  expect(lemonadeChange([5, 5, 10])).toBe(true);
});

test("example 3", () => {
  expect(lemonadeChange([10, 10])).toBe(false);
});

test("example 4", () => {
  expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false);
});
