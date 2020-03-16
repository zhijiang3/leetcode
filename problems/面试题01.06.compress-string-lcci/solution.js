/**
 * @param {string} S
 * @return {string}
 */
export default function compressString(S) {
  let ans = "";

  let char, count;
  for (let c of S) {
    if (char !== c) {
      if (count) ans += `${char}${count}`;

      char = c;
      count = 1;
    } else {
      count++;
    }
  }
  if (count) ans += `${char}${count}`;

  return ans.length >= S.length ? S : ans;
}
