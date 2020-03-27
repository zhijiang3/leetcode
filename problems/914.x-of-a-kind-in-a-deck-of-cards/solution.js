/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function gcd(a, b) {
  while (b) {
    const c = a % b;

    a = b;
    b = c;
  }

  return a;
}

/**
 * @param {number[]} deck
 * @return {boolean}
 */
export default function hasGroupsSizeX(deck) {
  const m = new Map();

  for (let n of deck) m.set(n, m.has(n) ? m.get(n) + 1 : 1);

  let x = 0;
  for (let n of m.keys()) x = gcd(m.get(n), x);

  return x >= 2;
}
