/**
 * @param {number} num
 * @return {boolean}
 */
export default function checkPerfectNumber(num) {
  const primes = [2, 3, 5, 7, 13, 17, 19, 31];

  for (let prime of primes) {
    if ((1 << (prime - 1)) * ((1 << prime) - 1) === num) return true;
  }

  return false;
}
