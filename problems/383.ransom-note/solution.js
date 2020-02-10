/**
 * @param {string} ransomNot
 * @param {string} magazine
 * @return {boolean}
 */
export default function canConstruct(ransomNot, magazine) {
  const map = {};

  for (let char of magazine) {
    if (!map[char]) map[char] = 0;
    map[char]++;
  }

  for (let char of ransomNote) {
    if (!map[char] || --map[char] < 0) return false;
  }

  return true;
}
