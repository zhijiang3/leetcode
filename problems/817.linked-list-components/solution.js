/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
export default function numComponents(head, G) {
  const numMap = {};
  for (let n of G) {
    numMap[n] = true;
  }

  let start = false;
  let total = 0;
  while (head) {
    if (numMap[head.val]) {
      start = true;
    } else if (start) {
      total++;
      start = false;
    }

    head = head.next;
  }

  if (start) total++;

  return total;
}
