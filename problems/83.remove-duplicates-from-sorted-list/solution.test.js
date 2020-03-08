import deleteDuplicates from "./solution.js";
import { arrayToList, listToArray } from "shared/utils";

test("example 1", () => {
  const input = arrayToList([1, 1, 2]);
  const output = listToArray(deleteDuplicates(input));

  expect(output).toEqual([1, 2]);
});

test("example 2", () => {
  const input = arrayToList([1, 1, 2, 3, 3]);
  const output = listToArray(deleteDuplicates(input));

  expect(output).toEqual([1, 2, 3]);
});
