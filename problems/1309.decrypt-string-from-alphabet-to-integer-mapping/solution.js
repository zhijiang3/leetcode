/**
 * @param {string} s
 * @return {string}
 */
export default function freqAlphabets(s) {
  let res = "";

  let i = s.length - 1;
  while (i >= 0) {
    if (s[i] === "#") {
      res = String.fromCharCode(96 + Number(`${s[i - 2]}${s[i - 1]}`)) + res;
      i -= 2;
    } else {
      res = String.fromCharCode(96 + Number(s[i])) + res;
    }

    i -= 1;
  }

  return res;
}
