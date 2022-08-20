const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

const { isNotEmpty, getFullPath } = require("./utils");

const getChangedFiles = async () => {
  const { stdout, stderr } = await exec(
    "git diff --name-only HEAD | grep -E '.(js|jsx|ts|tsx)$' | xargs"
  );
  if (stderr) {
    throw new Error(stderr);
  }

  return stdout
    .replace("\n", "")
    .split(" ")
    .filter(isNotEmpty)
    .map(getFullPath);
};

module.exports = getChangedFiles;
