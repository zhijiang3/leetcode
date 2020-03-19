import reverseBetween from "./solution.js";
import { listToArray, arrayToList } from "shared/utils.js";

test("example 1", () => {
  const input = arrayToList([1, 2, 3, 4, 5]);
  const output = listToArray(reverseBetween(input, 2, 4));

  expect(output).toEqual([1, 4, 3, 2, 5]);
});

test("example 2", () => {
  const input = arrayToList([1, 2, 3, 4, 5]);
  const output = listToArray(reverseBetween(input, 1, 4));

  expect(output).toEqual([4, 3, 2, 1, 5]);
});

test("example 3", () => {
  const input = arrayToList([1, 2, 3, 4, 5]);
  const output = listToArray(reverseBetween(input, 1, 5));

  expect(output).toEqual([5, 4, 3, 2, 1]);
});
