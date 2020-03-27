/**
 * @param {string[]} strs
 * @return {string}
 */
export default function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let i = 0;
  outerLoop: for (i; i < strs[0].length; ++i) {
    for (let j = 1; j < strs.length; ++j) {
      if (strs[0][i] !== strs[j][i]) break outerLoop;
    }
  }

  return strs[0].slice(0, i);
}
