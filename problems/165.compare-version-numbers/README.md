# Compare Version Numbers

> 题目地址: [https://leetcode-cn.com/problems/compare-version-numbers/](https://leetcode-cn.com/problems/compare-version-numbers/)

## 题目描述

比较两个版本号 `version1` 和 `version2`。

如果 `version1 > version2` 返回 `1`，如果 `version1 < version2` 返回 `-1`， 除此之外返回 `0`。

你可以假设版本字符串非空，并且只包含数字和 `.` 字符。

`.` 字符不代表小数点，而是用于分隔数字序列。

例如，`2.5` 不是“两个半”，也不是“差一半到三”，而是第二版中的第五个小版本。

你可以假设版本号的每一级的默认修订版号为 `0`。例如，版本号 `3.4` 的第一级（大版本）和第二级（小版本）修订号分别为 `3` 和 `4`。其第三级和第四级修订号均为 `0`。

示例 1:

```
输入: version1 = "0.1", version2 = "1.1"
输出: -1
```

示例 2:

```
输入: version1 = "1.0.1", version2 = "1"
输出: 1
```

示例 3:

```
输入: version1 = "7.5.2.4", version2 = "7.5.3"
输出: -1
```

示例 4：

```
输入：version1 = "1.01", version2 = "1.001"
输出：0
解释：忽略前导零，“01” 和 “001” 表示相同的数字 “1”。
```

示例 5：

```
输入：version1 = "1.0", version2 = "1.0.0"
输出：0
解释：version1 没有第三级修订号，这意味着它的第三级修订号默认为 “0”。
```

提示：

* 版本字符串由以点（`.`）分隔的数字字符串组成。这个数字字符串可能有前导零。
* 版本字符串不以点开始或结束，并且其中不会有两个连续的点。

------

## 题解

获取版本1和版本2通过 `.` 分割的每个版本从左到右比较即可。

### 代码实现

```js
function compareVersion(version1, version2) {
  let i = 0;
  let j = 0;

  const NUMBERS_REG = /[0-9]/;
  while (i < version1.length || j < version2.length) {
    let num1 = "0";
    while (i < version1.length && NUMBERS_REG.test(version1[i])) {
      num1 += version1[i++];
    }
    num1 = Number(num1);
    let num2 = "0";
    while (j < version2.length && NUMBERS_REG.test(version2[j])) {
      num2 += version2[j++];
    }
    num2 = Number(num2);
    if (num1 < num2) {
      return -1;
    } else if (num1 > num2) {
      return 1;
    } else {
      i++;
      j++;
    }
  }

  return 0;
}
```

### 复杂度分析

* 时间复杂度：$ O(n+m) $. $n$ 是版本1的长度，$m$ 是版本2的长度
* 空间复杂度：$ O(1) $.
