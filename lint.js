const { ESLint } = require("eslint");

const config = require("./.eslintrc.js");

const lint = async (files) => {
  try {
    const eslint = new ESLint({
      fix: true,
      baseConfig: config,
    });

    await eslint.lintFiles(files);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

module.exports = lint;
