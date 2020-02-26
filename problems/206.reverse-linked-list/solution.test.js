import reverseList from "./solution.js";
import ListNode from "data-structure/ListNode";

test("example 1", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;

  const head = reverseList(node1);

  expect(head).toBe(node4);
  expect(head.next).toBe(node3);
  expect(head.next.next).toBe(node2);
  expect(head.next.next.next).toBe(node1);
  expect(head.next.next.next.next).toBeNull();
});
