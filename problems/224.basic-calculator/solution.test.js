import calculate from "./solution.js";

test("example 1", () => {
  expect(calculate("1 + 1")).toBe(2);
});

test("example 2", () => {
  expect(calculate(" 2-1 + 2 ")).toBe(3);
});

test("example 3", () => {
  expect(calculate("(1+(4+5+2)-3)+(6+8)")).toBe(23);
});

test("example 4", () => {
  expect(calculate("2 - (11 + 2) + 5")).toBe(-6);
});
