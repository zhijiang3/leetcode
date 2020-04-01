import maxDepthAfterSplit from "./solution.js";
import Stack from "data-structure/Stack";

/**
 * @param {string} str
 * @return {number}
 */
function depth(str) {
  const stack = new Stack();
  let dep = 0;

  for (let s of str) {
    if (s === "(") {
      stack.push(s);
    } else {
      stack.pop();
    }
    dep = Math.max(dep, stack.size());
  }

  return dep;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function getDepth(input, output) {
  let a = "",
    b = "";

  for (let i = 0; i < input.length; ++i) {
    if (output[i] === 0) a += input[i];
    else b += input[i];
  }

  return Math.max(depth(a), depth(b));
}

test("example 1", () => {
  const input = "(()())";
  const output = maxDepthAfterSplit(input);

  expect(output.length).toBe(input.length);
  expect(getDepth(input, output)).toBe(1);
});

test("example 2", () => {
  const input = "()(())()";
  const output = maxDepthAfterSplit(input);

  expect(output.length).toBe(input.length);
  expect(getDepth(input, output)).toBe(1);
});

test("example 3", () => {
  const input = "(((())))";
  const output = maxDepthAfterSplit(input);

  expect(output.length).toBe(input.length);
  expect(getDepth(input, output)).toBe(2);
});
