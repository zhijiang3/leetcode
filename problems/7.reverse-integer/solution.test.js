import reverse from "./solution.js";

test("example 1", () => {
  expect(reverse(123)).toBe(321);
});

test("example 2", () => {
  expect(reverse(-123)).toBe(-321);
});

test("example 3", () => {
  expect(reverse(120)).toBe(21);
});
