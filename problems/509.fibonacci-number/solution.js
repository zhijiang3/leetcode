/**
 * @param {number} N
 * @return {number}
 */
export default function fib(N) {
  const f = [0, 1];

  for (let i = 2; i <= N; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[N];
}
