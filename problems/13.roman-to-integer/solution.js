const romanCharNumMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

/**
 * @param {string} s
 * @return {number}
 */
export default function romanToInt(s) {
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    let num = romanCharNumMap[s[i]];
    if (i + 1 < s.length && num < romanCharNumMap[s[i + 1]]) {
      num = -num;
    }
    ans += num;
  }

  return ans;
}
