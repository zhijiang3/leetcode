import countCharacters from "./solution.js";

test("example 1", () => {
  expect(countCharacters(["cat", "bt", "hat", "tree"], "atach")).toBe(6);
});

test("example 2", () => {
  expect(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr")).toBe(10);
});
