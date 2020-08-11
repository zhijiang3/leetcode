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
    if (partIp.length > 1 && partIp.charAt(0) === "0") continue;
    // 不在范围内
    if (255 - partIp < 0) continue;

    path.push(partIp);
    DFS(str, begin + i, splitTimes + 1, path, ans);
    path.pop();
  }
}

/**
 * @param {string} str
 * @return {string[]}
 */
export default function restoreIpAddresses(str) {
  if (str.length < 4 || str.length > 12) return [];

  const ans = [];

  DFS(str, 0 /* begin */, 0 /* splitTimes */, [] /* path */, ans);

  return ans;
}
