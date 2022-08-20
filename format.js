const path = require("path");
const fs = require("fs");

const prettier = require("prettier");

const format = async (files) => {
  try {
    files.forEach((file) => {
      const text = fs.readFileSync(file, "utf8");
      const formattedText = prettier.format(text, {
        parser: "babel",
        config: path.join(__dirname, "prettier.config.js"),
      });
      fs.writeFileSync(file, formattedText);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

module.exports = format;
