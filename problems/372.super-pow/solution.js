/**
 * @param {number} x
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function quickPow(x, n, m) {
  let ans = 1;

  while (n) {
    if ((n & 1) === 1) {
      ans = (ans * x) % m;
    }

    x = (x * x) % m;
    n = n >> 1;
  }

  return ans;
}

/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
export default function superPow(a, b) {
  const c = 1140;

  let pow = 0;
  for (let i = 0; i < b.length; i++) {
    pow = (10 * pow + b[i]) % c;
  }

  pow += c;

  return quickPow(a % 1337, pow, 1337);
}
