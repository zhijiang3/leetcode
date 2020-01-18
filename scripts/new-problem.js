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
      message: "题目编号",
      validate(input = "") {
        if (!input.trim() || isNaN(Number(input))) {
          return "请输入有效的编号";
        }

        return true;
      }
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
      choices: ["简单", "中等", "困难"]
    }
  ]);

  // problem/solution.js
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
        return input.split(",").reduce((res, arg) => {
          const [argName, type] = arg.split(":");

          if (argName && type) {
            res[argName.trim()] = type.trim();
          }

          return res;
        }, {});
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
    path.resolve(`problems/${answers.num}.${answers.title}/solution.js`),
    getSolutionTemplate(solutionArgs.name, solutionArgs.arguments, solutionArgs.returnType)
  );

  // problem/README.md
  await overwriteFile(
    path.resolve(`problems/${answers.num}.${answers.title}/README.md`),
    getProblemTemplate(_.startCase(answers.title), getLeetcodeLink(answers.title), {
      name: solutionArgs.name,
      args: Object.keys(solutionArgs.arguments)
    })
  );

  // problems/solution.test.js
  await overwriteFile(
    path.resolve(`problems/${answers.num}.${answers.title}/solution.test.js`),
    getTestTemplate(solutionArgs.name)
  );

  // README.md
  const README = await fs.readFile(path.resolve("README.md"), "utf8");
  await fs.outputFile(
    path.resolve("README.md"),
    `${README}
| ${answers.num} | [${_.startCase(answers.title)}](problems/${answers.num}.${
      answers.title
    }/README.md) | [JavaScript](problems/${answers.num}.${answers.title}/solution.js) | ${answers.difficulty}`
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

function getProblemTemplate(name = "", link = "", fn = { name: "", args: [] }) {
  return `\
# ${name}

> 题目地址: [${link}](${link})

## 题目描述

------

## 题解

### 代码实现

\`\`\`js
function ${fn.name}(${fn.args.join(", ")}) {
}
\`\`\`

### 复杂度分析

* 时间复杂度：$ O() $.
* 空间复杂度：$ O() $.

`;
}

function getSolutionTemplate(functionName = "name", args = {}, returnType) {
  const comments = getComments(
    Object.keys(args)
      .map(arg => ({
        commentType: "param",
        type: args[arg],
        name: arg
      }))
      .concat(returnType ? { commentType: "return", type: returnType } : "")
      .filter(item => !!item)
  );
  return `\
${comments}export default function ${functionName}(${Object.keys(args).join(", ")}) {
}
`;
}

function getComment({ commentType, type, name = "", desc = "" } = {}) {
  return ` * @${commentType} {${type}}${name ? " " + name : ""}${desc ? " " + desc : ""}`;
}

function getComments(comments = []) {
  if (comments.length <= 0) return "";

  return `/**
${comments.map(comment => getComment(comment)).join("\n")}
 */\n`;
}

function getTestTemplate(importName = "solution") {
  return `\
import ${importName} from "./solution.js";

test("example 1", () => {
  expect(${importName}()).toBe();
});
`;
}
