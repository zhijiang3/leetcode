import largestNumber from "./solution.js";

test("example 1", () => {
  expect(largestNumber([10, 2])).toBe("210");
});

test("example 2", () => {
  expect(largestNumber([3, 30, 34, 5, 9])).toBe("9534330");
});

test("0", () => {
  expect(largestNumber([0, 0, 0])).toBe("0");
});
