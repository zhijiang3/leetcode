/**
 * @param {string} s
 * @return {boolean}
 */
export default function isValid(s) {
  const map = {
    "]": "[",
    "}": "{",
    ")": "("
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      if (stack.pop() !== map[s[i]]) return false;
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
}
