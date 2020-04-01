# Maximum Nesting Depth of Two Valid Parentheses Strings

> 题目地址: [https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/](https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/)

## 题目描述

**有效括号字符串** 定义：对于每个左括号，都能找到与之对应的右括号，反之亦然。详情参见题末「**有效括号字符串**」部分。

**嵌套深度** `depth` 定义：即有效括号字符串嵌套的层数。详情参见题末「**嵌套深度**」部分。

给你一个「有效括号字符串」`seq`，将其分成两个不相交的子序列 `A` 和 `B`，且 `A` 和 `B` 都满足有效括号字符串的定义（注意：`A.length + B.length = seq.length`）。

现在，你需要从中选出 任意 一组有效括号字符串 `A` 和 `B`，使 `max(depth(A), depth(B))` 的可能取值最小。

返回长度为 `seq.length` 答案数组 `answer` ，选择 `A` 还是 `B` 的编码规则是：如果 `seq[i]` 是 `A` 的一部分，那么 `answer[i] = 0`。否则，`answer[i] = 1`。即便有多个满足要求的答案存在，你也只需返回**一个**。

示例 1：

```
输入：seq = "(()())"
输出：[0,1,1,1,1,0]
```

示例 2：

```
输入：seq = "()(())()"
输出：[0,0,0,1,1,0,1,1]
```

**提示：**

* `1 <= text.size <= 10000`

**有效括号字符串：**

仅由 `"("` 和 `")"` 构成的字符串，对于每个左括号，都能找到与之对应的右括号，反之亦然。

下述几种情况同样属于有效括号字符串：

* 空字符串
* 连接，可以记作 `AB`（`A` 与 `B` 连接），其中 `A` 和 `B` 都是有效括号字符串
* 嵌套，可以记作 `(A)`，其中 `A` 是有效括号字符串

**嵌套深度：**

类似地，我们可以定义任意有效括号字符串 `s` 的 **嵌套深度** `depth(S)`：

* `s` 为空时，`depth("") = 0`
* `s` 为 `A` 与 `B` 连接时，`depth(A + B) = max(depth(A), depth(B))`，其中 `A` 和 `B` 都是有效括号字符串
* `s` 为嵌套情况，`depth("(" + A + ")") = 1 + depth(A)`，其中 `A` 是有效括号字符串

例如：`""`，`"()()"`，和 `"()(()())"` 都是有效括号字符串，嵌套深度分别为 0，1，2，而 `")("` 和 `"(()"` 都不是有效括号字符串。

------

## 题解

### 代码实现

```js
function maxDepthAfterSplit(seq) {
  let depth = 0;
  return seq.split("").map((value, index) => {
    if (value === "(") {
      ++depth;
      return depth % 2;
    } else {
      const ans = depth % 2;
      --depth;
      return ans;
    }
  });
}
```

### 复杂度分析

* 时间复杂度：$ O(n) $.
* 空间复杂度：$ O(1) $.
