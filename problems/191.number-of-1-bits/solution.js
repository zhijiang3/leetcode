/**
 * @param {number} n - a positive integer
 * @return {number}
 */
export default function hammingWeight(n) {
  n = (n & 0x55555555) + ((n >> 1) & 0x55555555); // 01 01 ... 01
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333); // 0011 0011 ... 0011
  n = (n & 0x0f0f0f0f) + ((n >> 4) & 0x0f0f0f0f); // 00001111 00001111 .... 00001111
  n = (n & 0x00ff00ff) + ((n >> 8) & 0x00ff00ff); // 0000000011111111 0000000011111111
  n = (n & 0x0000ffff) + ((n >> 16) & 0x0000ffff); // 00000000000000001111111111111111
  return n;
}
