import sortList from "./solution.js";
import { arrayToList, listToArray } from "shared/utils.js";

test("example 1", () => {
  const input = arrayToList([4, 2, 1, 3]);
  const output = listToArray(sortList(input));

  expect(output).toEqual([1, 2, 3, 4]);
});

test("example 2", () => {
  const input = arrayToList([-1, 5, 3, 4, 0]);
  const output = listToArray(sortList(input));

  expect(output).toEqual([-1, 0, 3, 4, 5]);
});

test("example 3", () => {
  const input = arrayToList([4, 2, 7, 3, 1, 5, 6]);
  const output = listToArray(sortList(input));

  expect(output).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
