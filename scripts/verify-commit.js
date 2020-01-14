const message = require("fs-extra")
  .readFileSync(process.env.HUSKY_GIT_PARAMS, "utf-8")
  .trim();
const commitReg = /^(revert: )?(build|ci|docs|feat|fix|perf|refactor|style|test|chore|workflow)(\(.+\))?: .{1,50}/;

if (!commitReg.test(message)) {
  console.log();
  console.error(`  ERROR: invalid commit message format.\n`);

  process.exit(1);
}
