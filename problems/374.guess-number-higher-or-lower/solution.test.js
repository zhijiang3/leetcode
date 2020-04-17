import guessNumber from "./solution.js";
import { setGuessNumber } from "./helper";

test("example 1", () => {
  setGuessNumber(6);

  expect(guessNumber(10)).toBe(6);
});

test("example 2", () => {
  setGuessNumber(2);

  expect(guessNumber(50)).toBe(2);
});

test("example 3", () => {
  setGuessNumber(1);

  expect(guessNumber(1)).toBe(1);
});
