/**
 * @param {string} S
 * @return {string}
 */
export default function removeOuterParentheses(S) {
  let result = "";
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === ")") {
      stack.pop();

      if (stack.length) result += S[i];
    } else {
      if (stack.length) result += S[i];

      stack.push(S[i]);
    }
  }

  return result;
}
