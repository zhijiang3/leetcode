import restoreIpAddresses from "./solution.js";

test("example 1", () => {
  expect(restoreIpAddresses("25525511135")).toEqual(["255.255.11.135", "255.255.111.35"]);
});

test("空字符串", () => {
  expect(restoreIpAddresses("")).toEqual([]);
});

test("长度超过12的字符串", () => {
  expect(restoreIpAddresses("2552552552551")).toEqual([]);
});

test("0开头的ip", () => {
  expect(restoreIpAddresses("010010")).toEqual(["0.10.0.10", "0.100.1.0"]);
});
