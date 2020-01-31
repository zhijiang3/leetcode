import RecentCounter from "./solution.js";

test("example 1", () => {
  const rc = new RecentCounter();

  expect(rc.ping(1)).toBe(1);
  expect(rc.ping(100)).toBe(2);
  expect(rc.ping(3001)).toBe(3);
  expect(rc.ping(3002)).toBe(3);
});
