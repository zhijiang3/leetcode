import partition from "./solution.js";
import { arrayToList, listToArray } from "shared/utils.js";

test("example 1", () => {
  const input = arrayToList([1, 4, 3, 2, 5, 2]);
  const output = listToArray(partition(input, 3));

  expect(output).toEqual([1, 2, 2, 4, 3, 5]);
});
