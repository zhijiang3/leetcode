const MAX_INTEGER = 2147483647;
const MIN_INTEGER = -2147483648;

class Automaton {
  constructor() {
    this.ans = 0;
    this.sign = 1;
    this.state = "start";
    this.table = {
      start: ["start", "signed", "number", "end"],
      signed: ["end", "end", "number", "end"],
      number: ["end", "end", "number", "end"],
      end: ["end", "end", "end", "end"]
    };
  }

  /**
   * @param {string} char
   */
  get(char) {
    this.state = this.table[this.state][this.getCol(char)];

    if (this.state === "signed") {
      this.sign = char === "-" ? -1 : 1;
    } else if (this.state === "number") {
      const ans = this.ans * 10 + +char;
      this.ans = this.sign === 1 ? Math.min(ans, MAX_INTEGER) : Math.min(ans, -MIN_INTEGER);
    }
  }

  /**
   * @param {string} char
   * @return {number}
   */
  getCol(char) {
    if (char === " ") return 0;
    if (char === "+" || char === "-") return 1;
    if (/^[0-9]$/.test(char)) return 2;

    return 3;
  }
}

/**
 * @param {string} str
 * @return {number}
 */
export default function myAtoi(str) {
  const automaton = new Automaton();

  for (let c of str) {
    automaton.get(c);
  }

  // -0 === 0
  return automaton.ans === 0 ? 0 : automaton.sign * automaton.ans;
}
