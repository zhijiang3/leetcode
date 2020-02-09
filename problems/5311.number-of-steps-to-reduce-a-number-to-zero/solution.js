/**
 * @param {number} num
 * @return {number}
 */
export default function numberOfSteps(num) {
  let steps = 0;

  while (num) {
    steps += num !== 1 && num & 1 ? 2 : 1;
    num = num >> 1;
  }

  return steps;
}
