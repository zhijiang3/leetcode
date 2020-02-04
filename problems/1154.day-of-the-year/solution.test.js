import dayOfYear from "./solution.js";

test("example 1", () => {
  expect(dayOfYear("2019-01-09")).toBe(9);
});

test("example 2", () => {
  expect(dayOfYear("2019-02-10")).toBe(41);
});

test("example 3", () => {
  expect(dayOfYear("2003-03-01")).toBe(60);
});

test("example 4", () => {
  expect(dayOfYear("2004-03-01")).toBe(61);
});
