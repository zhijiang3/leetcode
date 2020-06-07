import findRepeatNumber from "./solution.js";

test("example 1", () => {
  /* prettier-ignore */
  expect(
    [2, 3].includes(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
  ).toBe(true);
});
