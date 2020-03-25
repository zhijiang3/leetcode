import addTwoNumbers from "./solution.js";
import { arrayToList, listToArray } from "shared/utils.js";

test("example 1", () => {
  const output = addTwoNumbers(arrayToList([7, 2, 4, 3]), arrayToList([5, 6, 4]));

  expect(listToArray(output)).toEqual([7, 8, 0, 7]);
});

test("example 2", () => {
  const output = addTwoNumbers(arrayToList([9, 4, 4, 3]), arrayToList([5, 6, 4]));

  expect(listToArray(output)).toEqual([1, 0, 0, 0, 7]);
});
