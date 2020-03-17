import mergeTwoLists from "./solution.js";
import { listToArray, arrayToList } from "shared/utils.js";

test("example 1", () => {
  const output = mergeTwoLists(arrayToList([1, 2, 4]), arrayToList([1, 3, 4]));

  expect(listToArray(output)).toEqual([1, 1, 2, 3, 4, 4]);
});
