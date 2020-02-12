/**
 * @param {number[]} time
 * @return {number}
 */
export default function numPairsDivisibleBy60(time) {
  let sum = 0;
  const count = new Array(60).fill(0);

  for (let num of time) {
    sum += count[(60 - (num % 60)) % 60];
    count[num % 60]++;
  }

  return sum;
}
