import dayOfTheWeek from "./solution.js";

test("example 1", () => {
  expect(dayOfTheWeek(31, 8, 2019)).toBe("Saturday");
});

test("example 2", () => {
  expect(dayOfTheWeek(18, 7, 1999)).toBe("Sunday");
});

test("example 3", () => {
  expect(dayOfTheWeek(15, 8, 1993)).toBe("Sunday");
});

test("example 4", () => {
  expect(dayOfTheWeek(25, 1, 2013)).toBe("Friday");
});

test("example 5", () => {
  expect(dayOfTheWeek(29, 2, 2016)).toBe("Monday");
});
