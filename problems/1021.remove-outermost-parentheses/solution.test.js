import removeOuterParentheses from "./solution.js";

test("example 1", () => {
  expect(removeOuterParentheses("(()())(())")).toBe("()()()");
});

test("example 2", () => {
  expect(removeOuterParentheses("(()())(())(()(()))")).toBe("()()()()(())");
});

test("example 3", () => {
  expect(removeOuterParentheses("()()")).toBe("");
});
