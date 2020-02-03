/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export default function strStr(haystack, needle) {
  const next = [-1];
  let nj = 0;
  let k = -1;
  while (nj < needle.length) {
    if (k === -1 || needle[nj] === needle[k]) {
      if (needle[++nj] === needle[++k]) {
        next[nj] = next[k];
      } else {
        next[nj] = k;
      }
    } else {
      k = next[k];
    }
  }

  let i = 0;
  let j = 0;
  while (i < haystack.length && j < needle.length) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }

  if (j === needle.length) {
    return i - j;
  } else {
    return -1;
  }
}
