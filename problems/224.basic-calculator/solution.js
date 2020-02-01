/**
 * 取出操作数的顶和次顶与运算符的栈顶进行运算
 * 并把结果放入操作数栈中
 * @param {number[]} operandsStack 操作数
 * @param {*[]} operatorStack 运算符
 */
function compute(operandsStack = [], operatorStack = []) {
  const opt = operatorStack.pop();
  const a = operandsStack.pop();
  const b = operandsStack.pop();

  switch (opt.operate) {
    case "+":
      operandsStack.push(b + a);
      break;
    case "-":
      operandsStack.push(b - a);
      break;
  }
}

/**
 * @param {string} s
 * @return {number}
 */
export default function calculate(s) {
  const operandsStack = [];
  const operatorStack = [];
  let basicPriority = 0;

  let current = 0;
  while (current < s.length) {
    let char = s[current];

    if (char === "(") {
      basicPriority += 100;

      current++;

      continue;
    }

    if (char === ")") {
      basicPriority -= 100;

      current++;

      continue;
    }

    const NUMBERS_REG = /[0-9]/;
    if (NUMBERS_REG.test(char)) {
      let numbers = "";

      while (NUMBERS_REG.test(char)) {
        numbers += char;
        char = s[++current];
      }

      operandsStack.push(Number(numbers));
      continue;
    }

    const OPERATOR_REG = /(\+|\-)/;
    if (OPERATOR_REG.test(char)) {
      const newPriority = basicPriority + 1;
      while (operatorStack.length !== 0 && newPriority <= operatorStack[operatorStack.length - 1].priority) {
        compute(operandsStack, operatorStack);
      }

      operatorStack.push({
        operate: char,
        priority: newPriority
      });

      current++;

      continue;
    }

    current++;
  }

  while (operatorStack.length !== 0) {
    compute(operandsStack, operatorStack);
  }

  return operandsStack.pop() || 0;
}
