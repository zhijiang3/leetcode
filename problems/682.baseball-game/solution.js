/**
 * @param {string[]} ops
 * @return {number}
 */
export default function calPoints(ops) {
  const stack = [];
  let sum = 0;

  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case "C":
        sum -= stack.pop();
        break;
      case "D":
        stack.push(stack[stack.length - 1] * 2);
        sum += stack[stack.length - 1];
        break;
      case "+":
        stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        sum += stack[stack.length - 1];
        break;
      default:
        stack.push(Number(ops[i]));
        sum += stack[stack.length - 1];
        break;
    }
  }

  return sum;
}
