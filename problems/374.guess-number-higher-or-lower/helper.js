let guessNumber;

/**
 * @param {number} num
 */
export function setGuessNumber(num) {
  guessNumber = num;
}

/**
 * @param {number} num
 * @return {number}
 */
export function guess(num) {
  if (guessNumber > num) return 1;
  else if (guessNumber < num) return -1;
  else return 0;
}
