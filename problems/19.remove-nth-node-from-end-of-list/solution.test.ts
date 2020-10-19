import { arrayToList, listToArray } from "shared/utils";
import removeNthFromEnd from "./solution";

test("示例", () => {
  const input = arrayToList([1, 2, 3, 4, 5]);
  const output = removeNthFromEnd(input, 2);

  expect(listToArray(output)).toEqual([1, 2, 3, 5]);
});

test("删除头结点", () => {
  const input = arrayToList([1, 2, 3, 4, 5]);
  const output = removeNthFromEnd(input, 5);

  expect(listToArray(output)).toEqual([2, 3, 4, 5]);
});

test("删除头结点后为空", () => {
  const input = arrayToList([1]);
  const output = removeNthFromEnd(input, 1);

  expect(output).toBeNull();
});
