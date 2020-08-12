/**
 * @param {number[]} nums
 * @return {string}
 */
export default function largestNumber(nums) {
  const ans = nums.map(String).sort((a, b) => {
    return a + b > b + a ? -1 : 1;
  });

  if (ans[0] === "0") return "0";

  return ans.join("");
}
