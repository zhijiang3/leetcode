/**
 * @param {{ string: string }} trie
 * @param {string} word
 */
function addToTrie(trie, word) {
  for (let i = word.length - 1; i >= 0; --i) {
    const char = word[i];

    if (!trie[char]) trie[char] = {};

    trie = trie[char];
  }
}

/**
 * @param {string[]} words
 * @return {number}
 */
export default function minimumLengthEncoding(words) {
  const tire = {};

  for (let word of words) {
    addToTrie(tire, word);
  }

  let ans = 0;

  const stack = [];

  stack.push([tire, 0]); // [字典树, 深度]

  while (stack.length) {
    const [currTrie, depth] = stack.pop();

    let len = 0;
    for (let key in currTrie) {
      len++;
      stack.push([currTrie[key], depth + 1]);
    }

    // 没有子节点了，说明是叶子节点，统计其长度
    if (len === 0) ans += depth + 1;
  }

  return ans;
}
