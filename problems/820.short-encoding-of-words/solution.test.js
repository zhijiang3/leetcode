import minimumLengthEncoding from "./solution.js";

test("example 1", () => {
  expect(minimumLengthEncoding(["time", "me", "bell"])).toBe(10);
});

test("example 2", () => {
  expect(minimumLengthEncoding(["me", "time", "me", "bell"])).toBe(10);
});

test("example 3", () => {
  expect(minimumLengthEncoding(["time", "time", "time", "time"])).toBe(5);
});

test("example 4", () => {
  expect(minimumLengthEncoding(["t"])).toBe(2);
});

test("example 5", () => {
  expect(minimumLengthEncoding(["time", "abe", "el", "bell"])).toBe(17);
});
