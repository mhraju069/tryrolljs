module.exports = {
  root: true,
  extends: [
    "@react-native-community/eslint-config",
    "standard-with-typescript",
    "eslint-config-prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-native"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  env: {
    "react-native/react-native": true,
  },
};
