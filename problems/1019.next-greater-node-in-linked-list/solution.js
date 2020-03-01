import ListNode from "data-structure/ListNode";

/**
 * @param {ListNode} head
 * @return {number[]}
 */
export default function nextLargerNodes(head) {
  const result = [];
  const stack = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  for (let i = result.length - 1; i >= 0; i--) {
    const cur = result[i];
    while (stack.length && stack[stack.length - 1] <= cur) {
      stack.pop();
    }
    result[i] = stack.length ? stack[stack.length - 1] : 0;
    stack.push(cur);
  }

  return result;
}
