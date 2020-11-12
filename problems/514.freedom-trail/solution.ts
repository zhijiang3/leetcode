function getIdx(str: string, pos: number) {
  return str.codePointAt(pos) - "a".codePointAt(0);
}

export default function findRotateSteps(ring: string, key: string): number {
  const n = ring.length, m = key.length;

  const pos = new Array(26).fill(0).map(_ => []);

  for (let i = 0; i < n; ++i) {
    pos[getIdx(ring, i)].push(i);
  }

  const dp = new Array(m).fill(0).map(
    _ => new Array(n).fill(Number.MAX_SAFE_INTEGER)
  );

  // 设置旋转至 key[0] 在 ring 中需要的步数
  for (const i of pos[getIdx(key, 0)]) {
    dp[0][i] = Math.min(i, n - i) + 1;
  }

  for (let i = 1; i < m; ++i) {
    for (const j of pos[getIdx(key, i)]) {
      for (const k of pos[getIdx(key, i - 1)]) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i - 1][k] + Math.min( Math.abs(j - k), n - Math.abs(j - k) ) + 1
        );
      }
    }
  }

  return dp[m - 1].reduce((pre, cur) => Math.min(pre, cur), Number.MAX_SAFE_INTEGER);
}
