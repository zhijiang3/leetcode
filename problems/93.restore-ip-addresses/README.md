# Restore Ip Addresses

> 题目地址: [https://leetcode-cn.com/problems/restore-ip-addresses/](https://leetcode-cn.com/problems/restore-ip-addresses/)

## 题目描述

给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 `'.'` 分隔。

示例:

```
输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]
```

------

## 题解

### 代码实现

```js
function DFS(str, begin, splitTimes, path, ans) {
  if (begin === str.length) {
    if (splitTimes === 4) ans.push(path.join("."));
    return;
  }

  // 如果剩下的不够组成 ip
  if (str.length - begin < 4 - splitTimes) return;
  // 如果剩下的数量有多余的
  if (str.length - begin > (4 - splitTimes) * 3) return;

  for (let i = 1; i <= 3; ++i) {
    // 越界了
    if (begin + i > str.length) break;

    const partIp = str.slice(begin, begin + i);

    // 0 开头的不合法
    if (partIp.length > 1 && partIp.charAt(0) === '0') continue;
    // 不在范围内
    if (255 - partIp < 0) continue;

    path.push(partIp);
    DFS(str, begin + i, splitTimes + 1, path, ans);
    path.pop();
  }
}

function restoreIpAddresses(str) {
  if (str.length < 4 || str.length > 12) return [];

  const ans = [];

  DFS(str, 0 /* begin */, 0 /* splitTimes */, [] /* path */, ans);

  return ans;
}
```

### 复杂度分析

* 时间复杂度：$ O() $.
* 空间复杂度：$ O() $.
