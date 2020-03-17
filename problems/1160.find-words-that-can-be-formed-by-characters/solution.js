/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
export default function countCharacters(words, chars) {
  const charsArr = new Array(26).fill(0);

  for (let i = 0; i < chars.length; i++) {
    charsArr[chars.charCodeAt(i) - 97]++;
  }

  let count = 0;
  let wordArr, code, len;
  wordLoop: for (let word of words) {
    wordArr = new Array(26).fill(0);
    len = word.length;
    for (let i = 0; i < len; i++) {
      code = word.charCodeAt(i) - 97;
      wordArr[code]++;

      if (wordArr[code] > charsArr[code]) continue wordLoop;
    }
    count += len;
  }

  return count;
}
