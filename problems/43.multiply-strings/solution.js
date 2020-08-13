/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
export default function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  let len1 = num1.length,
    len2 = num2.length;
  let ans = new Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; --i) {
    for (let j = len2 - 1; j >= 0; --j) {
      const sum = num1[i] * num2[j] + ans[i + j + 1];

      ans[i + j + 1] = sum % 10;
      ans[i + j] += Math.floor(sum / 10); // 进位相加
    }
  }
  while (ans[0] === 0) ans.shift();

  return ans.join("");
}
