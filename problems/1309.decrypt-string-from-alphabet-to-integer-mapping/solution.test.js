import freqAlphabets from "./solution.js";

test("example 1", () => {
  expect(freqAlphabets("10#11#12")).toBe("jkab");
});

test("example 2", () => {
  expect(freqAlphabets("1326#")).toBe("acz");
});

test("example 3", () => {
  expect(freqAlphabets("25#")).toBe("y");
});

test("example 4", () => {
  expect(freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#")).toBe(
    "abcdefghijklmnopqrstuvwxyz"
  );
});
