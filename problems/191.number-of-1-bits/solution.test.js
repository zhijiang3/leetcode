import hammingWeight from "./solution.js";

function myParseInt(str) {
  const len = str.length - 1;
  let bit = 0;
  let num = 0;

  while (bit <= len) {
    if (str[len - bit] === "1") num += Math.pow(2, bit);

    bit++;
  }

  return num;
}

test("example 1", () => {
  const input = myParseInt("00000000000000000000000000001011");
  expect(hammingWeight(input)).toBe(3);
});

test("example 2", () => {
  const input = myParseInt("00000000000000000000000010000000");
  expect(hammingWeight(input)).toBe(1);
});

test("example 3", () => {
  const input = myParseInt("11111111111111111111111111111101");
  expect(hammingWeight(input)).toBe(31);
});
