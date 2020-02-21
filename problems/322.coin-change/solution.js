/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export default function coinChange(coins, amount) {
  const f = [0];

  for (let n = 1; n <= amount; n++) {
    f[n] = Number.MAX_VALUE;
    for (let i = 0; i < coins.length; i++) {
      if (n - coins[i] >= 0) {
        f[n] = Math.min(f[n], f[n - coins[i]] + 1);
      }
    }
  }

  return f[amount] === Number.MAX_VALUE ? -1 : f[amount];
}
