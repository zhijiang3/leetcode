import middleNode from "./solution.js";
import ListNode from "data-structure/ListNode";

test("example 1", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);
  const node5 = new ListNode(5);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;

  expect(middleNode(node1)).toEqual(node3);
});

test("example 2", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);
  const node5 = new ListNode(5);
  const node6 = new ListNode(6);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;

  expect(middleNode(node1)).toEqual(node4);
});

test("example 3", () => {
  const node1 = new ListNode(1);

  expect(middleNode(node1)).toEqual(node1);
});

test("example 4", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);

  node1.next = node2;

  expect(middleNode(node1)).toEqual(node2);
});
