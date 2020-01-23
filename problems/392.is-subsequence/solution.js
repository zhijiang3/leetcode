/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export default function isSubsequence(s, t) {
  let j = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) j++;
    if (s.length === j) return true;
  }

  return s.length === j;
}
