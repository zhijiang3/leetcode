import reorderList from "./solution.js";
import ListNode from "data-structure/ListNode";

test("example 1", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;

  reorderList(node1);

  expect(node1 === node1).toBe(true);
  expect(node1.next === node4).toBe(true);
  expect(node1.next.next === node2).toBe(true);
  expect(node1.next.next.next === node3).toBe(true);
  expect(node1.next.next.next.next).toBeNull();
});

test("example 2", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);
  const node5 = new ListNode(5);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;

  reorderList(node1);

  expect(node1 === node1).toBe(true);
  expect(node1.next === node5).toBe(true);
  expect(node1.next.next === node2).toBe(true);
  expect(node1.next.next.next === node4).toBe(true);
  expect(node1.next.next.next.next === node3).toBe(true);
  expect(node1.next.next.next.next.next).toBeNull();
});

test("example 3", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);
  const node5 = new ListNode(5);
  const node6 = new ListNode(6);
  const node7 = new ListNode(7);
  const node8 = new ListNode(8);
  const node9 = new ListNode(9);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  node7.next = node8;
  node8.next = node9;

  reorderList(node1);

  expect(node1 === node1).toBe(true);
  expect(node1.next === node9).toBe(true);
  expect(node1.next.next === node2).toBe(true);
  expect(node1.next.next.next === node8).toBe(true);
  expect(node1.next.next.next.next === node3).toBe(true);
  expect(node1.next.next.next.next.next === node7).toBe(true);
  expect(node1.next.next.next.next.next.next === node4).toBe(true);
  expect(node1.next.next.next.next.next.next.next === node6).toBe(true);
  expect(node1.next.next.next.next.next.next.next.next === node5).toBe(true);
  expect(node1.next.next.next.next.next.next.next.next.next).toBeNull();
});

test("example 4", () => {
  const node1 = new ListNode(1);

  reorderList(node1);

  expect(node1 === node1).toBe(true);
  expect(node1.next).toBeNull();
});

test("example 5", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);

  node1.next = node2;

  reorderList(node1);

  expect(node1 === node1).toBe(true);
  expect(node1.next === node2).toBe(true);
  expect(node1.next.next).toBeNull();
});

test("example 6", () => {
  expect(() => reorderList()).not.toThrow();
});
