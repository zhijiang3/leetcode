import isNumber from "./solution.js";

test("example 1", () => {
  expect(isNumber("0")).toBe(true);
  expect(isNumber(" 0.1 ")).toBe(true);
  expect(isNumber("abc")).toBe(false);
  expect(isNumber("1 a")).toBe(false);
  expect(isNumber("2e10")).toBe(true);
  expect(isNumber(" -90e3   ")).toBe(true);
  expect(isNumber(" 1e")).toBe(false);
  expect(isNumber("e3")).toBe(false);
  expect(isNumber(" 6e-1")).toBe(true);
  expect(isNumber(" 99e2.5 ")).toBe(false);
  expect(isNumber("53.5e93")).toBe(true);
  expect(isNumber(" --6 ")).toBe(false);
  expect(isNumber("-+3")).toBe(false);
  expect(isNumber("95a54e53")).toBe(false);
  expect(isNumber("+0.")).toBe(true);
  expect(isNumber("        - 0.")).toBe(false);
  expect(isNumber("-0.")).toBe(true);
  expect(isNumber("-.3")).toBe(true);
  expect(isNumber("3.")).toBe(true);
  expect(isNumber("6+1")).toBe(false);
  expect(isNumber("0e")).toBe(false);
  expect(isNumber("e9")).toBe(false);
  expect(isNumber("-")).toBe(false);
  expect(isNumber(".")).toBe(false);
  expect(isNumber("")).toBe(false);
});
