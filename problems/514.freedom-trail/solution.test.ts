import findRotateSteps from "./solution";

test("示例", () => {
  expect(findRotateSteps("godding", "gd")).toBe(4);
});

test("应该取最小的，而不是最近的", () => {
  expect(findRotateSteps("goqeieg", "geq")).toBe(7);
});

test("重复取值", () => {
  expect(findRotateSteps("a", "aaa")).toBe(3);
});

test("上限", () => {
  expect(findRotateSteps("quskijikxuiuhukqqbkmwbbreqffghoygfogncckzsqturelvhmgmqxszkzpugfwymwyhhjqjseuwcescchbztpfpyiwvsvwwebs", "quskijikxuiuhukqqbkmwbbreqffghoygfogncckzsqturelvhmgmqxszkzpugfwymwyhhjqjseuwcescchbztpfpyiwvsvwwebs")).toBe(199);
});

test("很长的一段", () => {
  expect(findRotateSteps("xrrakuulnczywjs", "jrlucwzakzussrlckyjjsuwkuarnaluxnyzcnrxxwruyr")).toBe(204);
});
