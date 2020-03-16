import compressString from "./solution.js";

test("example 1", () => {
  expect(compressString("aabcccccaaa")).toBe("a2b1c5a3");
});

test("example 2", () => {
  expect(compressString("abbccd")).toBe("abbccd");
});
