import longestCommonPrefix from "./solution.js";

test("example 1", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});

test("example 2", () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});

test("example 3", () => {
  expect(longestCommonPrefix(["a"])).toBe("a");
});
