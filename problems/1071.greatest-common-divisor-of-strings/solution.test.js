import gcdOfStrings from "./solution.js";

test("example 1", () => {
  expect(gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
});

test("example 2", () => {
  expect(gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
});

test("example 3", () => {
  expect(gcdOfStrings("LEET", "CODE")).toBe("");
});

test("example 4", () => {
  expect(gcdOfStrings("LEET", "LEETCODE")).toBe("");
});

test("example 5", () => {
  expect(gcdOfStrings("ABCABC", "ABCABC")).toBe("ABCABC");
});

test("example 6", () => {
  expect(gcdOfStrings("ABABABABABABAB", "ABAB")).toBe("AB");
});

test("example 7", () => {
  expect(gcdOfStrings("ABC", "ABCABC")).toBe("ABC");
});

test("example 8", () => {
  expect(gcdOfStrings("AAAAAAAC", "AAAA")).toBe("");
});

test("example 9", () => {
  expect(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX")).toBe("TAUXX");
});

test("example 10", () => {
  expect(gcdOfStrings("CBCCBC", "CB")).toBe("");
});
