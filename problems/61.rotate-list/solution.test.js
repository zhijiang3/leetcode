import rotateRight from "./solution.js";
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

  const node = rotateRight(node1, 2);

  expect(node === node4).toBe(true);
  expect(node.next === node5).toBe(true);
  expect(node.next.next === node1).toBe(true);
  expect(node.next.next.next === node2).toBe(true);
  expect(node.next.next.next.next === node3).toBe(true);
  expect(node.next.next.next.next.next).toBeNull();
});

test("example 2", () => {
  const node0 = new ListNode(0);
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);

  node0.next = node1;
  node1.next = node2;

  const node = rotateRight(node0, 4);

  expect(node === node2).toBe(true);
  expect(node.next === node0).toBe(true);
  expect(node.next.next === node1).toBe(true);
  expect(node.next.next.next).toBeNull();
});

test("example 3", () => {
  const node1 = new ListNode(1);

  const node = rotateRight(node1, 4);

  expect(node === node1).toBe(true);
  expect(node.next).toBeNull();
});

test("example 4", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);

  node1.next = node2;

  const node = rotateRight(node1, 3);

  expect(node === node2).toBe(true);
  expect(node.next === node1).toBe(true);
  expect(node.next.next).toBeNull();
});

test("example 5", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;

  const node = rotateRight(node1, 2);

  expect(node === node3).toBe(true);
  expect(node.next === node4).toBe(true);
  expect(node.next.next === node1).toBe(true);
  expect(node.next.next.next === node2).toBe(true);
  expect(node.next.next.next.next).toBeNull();
});

test("example 6", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;

  const node = rotateRight(node1, 4);

  expect(node === node1).toBe(true);
  expect(node.next === node2).toBe(true);
  expect(node.next.next === node3).toBe(true);
  expect(node.next.next.next === node4).toBe(true);
  expect(node.next.next.next.next).toBeNull();
});

test("example 7", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;

  const node = rotateRight(node1, 3);

  expect(node === node2).toBe(true);
  expect(node.next === node3).toBe(true);
  expect(node.next.next === node4).toBe(true);
  expect(node.next.next.next === node1).toBe(true);
  expect(node.next.next.next.next).toBeNull();
});
