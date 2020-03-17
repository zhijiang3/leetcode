import swapPairs from "./solution.js";
import { arrayToList, listToArray } from "shared/utils.js";
import ListNode from "data-structure/ListNode.js";

test("example 1", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;

  const output = swapPairs(node1);

  expect(listToArray(output)).toEqual([2, 1, 4, 3]);
  expect(output).toBe(node2);
  expect(output.next).toBe(node1);
  expect(output.next.next).toBe(node4);
  expect(output.next.next.next).toBe(node3);
  expect(output.next.next.next.next).toBeNull();
});

test("example 2", () => {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);

  node1.next = node2;
  node2.next = node3;

  const output = swapPairs(node1);

  expect(listToArray(output)).toEqual([2, 1, 3]);
  expect(output).toBe(node2);
  expect(output.next).toBe(node1);
  expect(output.next.next).toBe(node3);
  expect(output.next.next.next).toBeNull();
});
