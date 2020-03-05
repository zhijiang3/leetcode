/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
export default function distributeCandies(candies, num_people) {
  const ans = new Array(num_people).fill(0);

  let i = 0;
  while (candies) {
    const send = Math.min(i + 1, candies);
    ans[i % num_people] += send;

    i++;
    candies -= send;
  }

  return ans;
}
