import deleteDuplicates from "./solution.js";
import { listToArray, arrayToList } from "shared/utils";

test("example 1", () => {
  const input = arrayToList([1, 2, 3, 3, 4, 4, 5]);
  const output = listToArray(deleteDuplicates(input));

  expect(output).toEqual([1, 2, 5]);
});

test("example 2", () => {
  const input = arrayToList([1, 1, 1, 2, 3]);
  const output = listToArray(deleteDuplicates(input));

  expect(output).toEqual([2, 3]);
});

test("example 3", () => {
  const input = arrayToList([1, 2, 3, 3, 3]);
  const output = listToArray(deleteDuplicates(input));

  expect(output).toEqual([1, 2]);
});

test("example 4", () => {
  const input = arrayToList([1, 2, 3, 3, 3, 4, 4, 5, 6, 6]);
  const output = listToArray(deleteDuplicates(input));

  expect(output).toEqual([1, 2, 5]);
});
