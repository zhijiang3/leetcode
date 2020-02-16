import decompressRLEList from "./solution.js";

test("example 1", () => {
  expect(decompressRLEList([1, 2, 3, 4])).toBe([2, 4, 4, 4]);
});
