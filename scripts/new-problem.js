const path = require("path");
const chalk = require("chalk");
const fs = require("fs-extra");
const inquirer = require("inquirer");
const args = require("minimist")(process.argv.slice(2));
const problem = args._[0];

;(async () => {
  if (!(/^(\d+)\.([\w|-]+)$/.test(problem))) {
    console.log("");
    console.log(chalk.red("[ERROR]") + " 请输入正确的名称，格式如：50.powx-n");
    console.log("");
    return;
  }

  if (fs.pathExistsSync(path.resolve(`problems/${problem}`))) {
    const answers = await inquirer.prompt([
      {
        type: "confirm",
        name: "continue",
        message: `${problem} 文件夹已存在，是否继续？`,
        default: false
      }
    ]);

    if (!answers.continue) return;
  }

  try {
    await fs.ensureFile(path.resolve(`problems/${problem}/README.md`));
  } catch (err) {
    console.log("err: ", err);
  }

  try {
    await fs.ensureFile(path.resolve(`problems/${problem}/${problem}.js`));
  } catch (err) {
    console.log("err: ", err);
  }
})();
