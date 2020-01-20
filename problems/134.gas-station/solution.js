/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
export default function canCompleteCircuit(gas, cost) {
  let total = 0;
  let tank = 0;
  let index = 0;

  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];

    total += diff;
    tank += diff;

    if (tank < 0) {
      tank = 0;
      index = i + 1;
    }
  }

  return total >= 0 ? index : -1;
}
