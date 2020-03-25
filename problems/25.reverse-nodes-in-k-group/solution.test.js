import reverseKGroup from "./solution.js";
import { arrayToList, listToArray } from "shared/utils.js";
import ListNode from "data-structure/ListNode.js";

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

  const output = reverseKGroup(node1, 2);

  expect(listToArray(output)).toEqual([2, 1, 4, 3, 5]);
  expect(output).toBe(node2);
  expect(output.next).toBe(node1);
  expect(output.next.next).toBe(node4);
  expect(output.next.next.next).toBe(node3);
  expect(output.next.next.next.next).toBe(node5);
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

  const output = reverseKGroup(node1, 3);

  expect(listToArray(output)).toEqual([3, 2, 1, 4, 5]);
  expect(output).toBe(node3);
  expect(output.next).toBe(node2);
  expect(output.next.next).toBe(node1);
  expect(output.next.next.next).toBe(node4);
  expect(output.next.next.next.next).toBe(node5);
});
