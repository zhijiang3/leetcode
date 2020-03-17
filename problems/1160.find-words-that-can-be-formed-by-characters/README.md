# Find Words That Can Be Formed by Characters

> 题目地址: [https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters/](https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters/)

## 题目描述

给你一份『词汇表』（字符串数组） `words` 和一张『字母表』（字符串） `chars`。

假如你可以用 `chars` 中的『字母』（字符）拼写出 `words` 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

注意：每次拼写时，`chars` 中的每个字母都只能用一次。

返回词汇表 `words` 中你掌握的所有单词的 **长度之和**。

示例 1：

```
输入：words = ["cat","bt","hat","tree"], chars = "atach"
输出：6
解释： 
可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
```

示例 2：

```
输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
输出：10
解释：
可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。
```

提示：

* `1 <= words.length <= 1000`
* `1 <= words[i].length, chars.length <= 100`
* 所有字符串中都仅包含小写英文字母

------

## 题解

记录字母表字母出现的次数，与词汇表的每一个词汇进行比较即可。

### 代码实现

```js
function countCharacters(words, chars) {
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
```

### 复杂度分析

* 时间复杂度：$ O(n) $. $n$ 为每个词汇里的每一个字母，最少需要遍历每个字母一次
* 空间复杂度：$ O(m) $. $m$ 为 2 个存储字母的计数数组
