import ListNode from "data-structure/ListNode";
import TreeNode from "data-structure/TreeNode";
import { listToArray, arrayToList, treeToArray } from "./utils";

describe("listToArray", () => {
  it("应该正确转换", () => {
    const input = new ListNode(1);
    input.next = new ListNode(2);
    input.next.next = new ListNode(3);
    input.next.next.next = new ListNode(4);

    expect(listToArray(input)).toEqual([1, 2, 3, 4]);
  });
});

describe("arrayToList", () => {
  it("应该正确转换", () => {
    const input = [1, 2, 3, 4];
    const output = arrayToList(input);

    let node = output, index = 0;
    while (node) {
      expect(node.val).toBe(input[index]);

      index++;
      node = node.next;
    }
  });
});

describe("treeToArray", () => {
  it("应该正确转换", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);

    expect(treeToArray(root)).toEqual([1, 2, 3]);
  });
});
