const _ = require("lodash");
const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");

newProblem();

async function newProblem() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "num",
      message: "题目编号"
    },
    {
      type: "input",
      name: "title",
      message: "题目名称",
      filter(input) {
        return _.kebabCase(input);
      }
    },
    {
      type: "list",
      name: "difficulty",
      message: "难度",
      choices: ["简单", "中等", "困难"],
      filter(input) {
        const colorMap = {
          ["简单"]: "#009975",
          ["中等"]: "#ED7336",
          ["困难"]: "#EC4C47"
        };
        return `<span style="color: ${colorMap[input]};">${input}</span>`;
      }
    }
  ]);

  // problem/solution.ts
  const solutionArgs = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "函数名称",
      default: _.camelCase(answers.title),
      filter(input) {
        return _.camelCase(input);
      }
    },
    {
      type: "input",
      name: "arguments",
      message: "函数参数，用逗号隔开如：nums: string, target: string[]",
      filter(input = "") {
        return input
          .split(",")
          .reduce((res, arg) => {
            const [argName, type] = arg.split(":");

            res.push(`${argName.trim()}${type ? ": " + type.trim() : ""}`);

            return res;
          }, [])
          .join(", ");
      }
    },
    {
      type: "input",
      name: "returnType",
      message: "返回值",
      filter(input) {
        if (input === "null") {
          return false;
        }

        return input;
      }
    }
  ]);
  await overwriteFile(
    path.resolve(`problems/${answers.num}.${answers.title}/solution.ts`),
    getSolutionTemplate(solutionArgs.name, solutionArgs.arguments, solutionArgs.returnType)
  );

  // problem/README.md
  await overwriteFile(
    path.resolve(`problems/${answers.num}.${answers.title}/README.md`),
    getProblemTemplate(_.startCase(answers.title), getLeetcodeLink(answers.title), {
      name: solutionArgs.name,
      args: solutionArgs.arguments,
      returnType: solutionArgs.returnType
    })
  );

  // problems/solution.test.ts
  await overwriteFile(
    path.resolve(`problems/${answers.num}.${answers.title}/solution.test.ts`),
    getTestTemplate(solutionArgs.name)
  );

  // README.md
  const README = await fs.readFile(path.resolve("README.md"), "utf8");
  await fs.outputFile(
    path.resolve("README.md"),
    `${README}
| ${answers.num} | [${_.startCase(answers.title)}](problems/${answers.num}.${answers.title}) | [TypeScript](problems/${
      answers.num
    }.${answers.title}/solution.ts) | ${answers.difficulty}`
  );
}

async function overwriteFile(filePath, data) {
  if (await fs.pathExists(filePath)) {
    const { overwrite } = await inquirer.prompt([
      {
        type: "confirm",
        name: "overwrite",
        message: `${filePath} 文件已存在，是否覆盖该文件？`,
        default: false
      }
    ]);

    if (!overwrite) return;
  }

  await fs.outputFile(filePath, data);
}

function getLeetcodeLink(name) {
  return `https://leetcode-cn.com/problems/${name}/`;
}

function getProblemTemplate(name = "", link = "", fn = { name: "", args: [], returnType: "" }) {
  return `\
# ${name}

> 题目地址: [${link}](${link})

## 题目描述

------

## 题解

### 代码实现

\`\`\`ts
function ${fn.name}(${fn.args})${fn.returnType ? ": " + fn.returnType.trim() : ""} {
}
\`\`\`

### 复杂度分析

* 时间复杂度：$ O() $.
* 空间复杂度：$ O() $.
`;
}

function getSolutionTemplate(functionName = "name", args = "", returnType) {
  return `export default function ${functionName}(${args})${returnType ? ": " + returnType.trim() : ""} {
}
`;
}

function getTestTemplate(importName = "solution") {
  return `\
import ${importName} from "./solution";

test("示例", () => {
  expect(${importName}()).toBe();
});
`;
}
