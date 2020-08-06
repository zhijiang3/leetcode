function toVowel(word) {
  return word.replace(/(a|e|i|o|u)/g, "_");
}

/**
 * @param {string[]} words
 * @param {string[]} queries
 * @return {string[]}
 */
export default function spellchecker(words, queries) {
  const perfectWords = new Map();
  const caseWords = new Map();
  const vowelWords = new Map();

  words.forEach(word => {
    if (!perfectWords.has(word)) perfectWords.set(word, word);
    const lowerCaseWord = word.toLowerCase();
    if (!caseWords.has(lowerCaseWord)) caseWords.set(lowerCaseWord, word);
    const vowelWord = toVowel(lowerCaseWord);
    if (!vowelWords.has(vowelWord)) vowelWords.set(vowelWord, word);
  });

  return queries.map(query => {
    return (
      perfectWords.get(query) ||
      ((query = query.toLowerCase()), caseWords.get(query)) ||
      vowelWords.get(toVowel(query)) ||
      ""
    );
  });
}
