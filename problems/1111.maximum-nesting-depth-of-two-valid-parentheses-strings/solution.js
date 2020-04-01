/**
 * @param {string} seq
 * @return {number[]}
 */
export default function maxDepthAfterSplit(seq) {
  let depth = 0;
  return seq.split("").map((value, index) => {
    if (value === "(") {
      ++depth;
      return depth % 2;
    } else {
      const ans = depth % 2;
      --depth;
      return ans;
    }
  });
}
