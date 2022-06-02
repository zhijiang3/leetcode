/**
 * Population Count
 * - 计算二进制表示中 1 的数量
 */
export function popcount(n: number): number {
  let count = 0;
  while (n) {
    count++;
    n &= n - 1;
  }
  return count;
}
