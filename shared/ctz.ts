/**
 * Counting Trailing Zeros
 * - 返回从最低位开始的连续的 0 的个数；如果传入 0 则行为未定义。
 */
export function ctz(n: number): number {
  for (let i = 0; i < 64; i++) {
    if (n & (1 << i)) return i;
  }

  return 0;
}
