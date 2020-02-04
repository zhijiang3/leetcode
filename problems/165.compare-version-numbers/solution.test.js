import compareVersion from "./solution.js";

test("example 1", () => {
  expect(compareVersion("0.1", "1.1")).toBe(-1);
});

test("example 2", () => {
  expect(compareVersion("1.0.1", "1")).toBe(1);
});

test("example 3", () => {
  expect(compareVersion("7.5.2.4", "7.5.3")).toBe(-1);
});

test("example 4", () => {
  expect(compareVersion("1.01", "1.001")).toBe(0);
});

test("example 5", () => {
  expect(compareVersion("1.0", "1.0.0")).toBe(0);
});
