import insertionSortList from "./solution.js";
import ListNode from "data-structure/ListNode.js";

/**
 * @param {number[]} input
 * @return {ListNode}
 */
function toLinkedList(input) {
  const head = new ListNode("head");

  input.reduce((prev, val) => {
    prev.next = new ListNode(val);
    return prev.next;
  }, head);

  return head.next;
}

test("example 1", () => {
  const head = toLinkedList([4, 2, 1, 3]);

  let nHead = insertionSortList(head);
  [1, 2, 3, 4].forEach(num => {
    expect(nHead.val).toBe(num);
    nHead = nHead.next;
  });
});

test("example 2", () => {
  const head = toLinkedList([-1, 5, 3, 4, 0]);

  let nHead = insertionSortList(head);
  [-1, 0, 3, 4, 5].forEach(num => {
    expect(nHead.val).toBe(num);
    nHead = nHead.next;
  });
});
