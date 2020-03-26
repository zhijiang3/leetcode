import flatten from "./solution.js";
import Node from "data-structure/Node.js";
import { listToArray } from "shared/utils.js";

function reverseTraverse(head) {
  const ans = [];

  let prev = null;
  while (head) {
    prev = head;
    head = head.next;
  }

  while (prev) {
    ans.push(prev);
    prev = prev.prev;
  }

  return ans;
}

test("example 1", () => {
  /* prettier-ignore */

  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const node6 = new Node(6);
  const node7 = new Node(7);
  const node8 = new Node(8);
  const node9 = new Node(9);
  const node10 = new Node(10);
  const node11 = new Node(11);
  const node12 = new Node(12);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node3.child = node7;
  node7.next = node8;
  node8.next = node9;
  node8.child = node11;
  node11.next = node12;
  node9.next = node10;
  node4.next = node5;
  node5.next = node6;

  const output = flatten(node1);

  expect(listToArray(output)).toEqual([1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]);
  expect(reverseTraverse(output)).toEqual([6, 5, 4, 10, 9, 12, 11, 8, 7, 3, 2, 1]);
  expect(output.prev).toBeNull();
  expect(listToArray(output).every(node => node.child === null)).toBe(true);
});
