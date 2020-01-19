import convertToBase7 from "./solution.js";

test("example 1", () => {
  expect(convertToBase7(100)).toBe("202");
});

test("example 2", () => {
  expect(convertToBase7(-7)).toBe("-10");
});

test("example 3", () => {
  expect(convertToBase7(0)).toBe("0");
});
