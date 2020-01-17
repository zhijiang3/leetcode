/**
 * @param {number[][]} moves
 * @return {string}
 */
export default function tictactoe(moves) {
  let a = 0;
  let b = 0;
  const answers = [7, 56, 448, 73, 146, 292, 273, 84];

  for (let i = 0; i < moves.length; i++) {
    const binaryBit = 1 << (3 * moves[i][0] + moves[i][1]);

    if ((i & 1) === 1) {
      // odd
      b ^= binaryBit;
    } else {
      a ^= binaryBit;
    }
  }

  for (let answer of answers) {
    if ((a & answer) === answer) {
      return "A";
    } else if ((b & answer) === answer) {
      return "B";
    }
  }

  return moves.length >= 9 ? "Draw" : "Pending";
}
