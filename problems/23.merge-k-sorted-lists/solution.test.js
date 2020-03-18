import mergeKLists from "./solution.js";
import { listToArray, arrayToList } from "shared/utils.js";

test("example 1", () => {
  const input = [arrayToList([1, 4, 5]), arrayToList([1, 3, 4]), arrayToList([2, 6])];
  const output = listToArray(mergeKLists(input));

  expect(output).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
});
