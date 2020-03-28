# Short Encoding of Words

> 题目地址: [https://leetcode-cn.com/problems/short-encoding-of-words/](https://leetcode-cn.com/problems/short-encoding-of-words/)

## 题目描述

给定一个单词列表，我们将这个列表编码成一个索引字符串 `S` 与一个索引列表 `A`。

例如，如果这个列表是 `["time", "me", "bell"]`，我们就可以将其表示为 `S = "time#bell#"` 和 `indexes = [0, 2, 5]`。

对于每一个索引，我们可以通过从字符串 `S` 中索引的位置开始读取字符串，直到 `"#"` 结束，来恢复我们之前的单词列表。

那么成功对给定单词列表进行编码的最小字符串长度是多少呢？

示例：

```
输入: words = ["time", "me", "bell"]
输出: 10
说明: S = "time#bell#" ， indexes = [0, 2, 5] 。
```

**提示：**

* `1 <= words.length <= 2000`
* `1 <= words[i].length <= 7`
* 每个单词都是小写字母 。

------

## 题解

### 方法一：检查后缀

如果一个单词 `word1` 的后缀完全包含了另一个单词 `word2` 那么，`word2` 这个单词是不需要再进行编码的，如：`word1 = time, word2 = me`，这里的 `time` 后缀完全包含了 `me` 所以在编码单词 `time` 时，其实已经编码了 `me` 这个单词。

因此，目标就是保留所有不是其他单词后缀的单词，最后的结果就是这些单词长度加一的总和。

#### 代码实现

```js
function minimumLengthEncoding(words) {
  const hashSet = new Set(words);

  for (let word of hashSet) {
    for (let i = 1; i < word.length; ++i) {
      // 删除列表中被 word 后缀完全覆盖的单词
      hashSet.delete(word.substring(i));
    }
  }

  let ans = 0;
  for (let word of hashSet) {
    ans += word.length + 1;
  }
  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(N w^2) $. $N$ 为单词的个数，每个单词至少被遍历 $w^2$ 次
* 空间复杂度：$ O(N) $.

### 方法二：字典树

去找到是否不同的单词具有相同的后缀，我们可以将其反序插入到字典树中。

#### 代码实现

```js
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
function minimumLengthEncoding(words) {
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
    if (len === 0)
      ans += depth + 1;
  }

  return ans;
}
```

#### 复杂度分析

* 时间复杂度：$ O(S) $. $S$ 为所有单词的字母总和
* 空间复杂度：$ O(S) $.
