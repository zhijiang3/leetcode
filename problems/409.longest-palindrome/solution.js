/**
 * @param {string} s
 * @return {number}
 */
export default function longestPalindrome(s) {
  const count = {};

  for (let c of s) {
    count[c] || (count[c] = 0);
    count[c]++;
  }

  let ans = 0;
  for (let c in count) {
    ans += count[c] - (count[c] % 2);
    if (count[c] % 2 === 1 && ans % 2 === 0) ans++;
  }

  return ans;
}
