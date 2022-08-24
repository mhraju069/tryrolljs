const { getConfig } = require("./webpack");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    // this addon would be great to use if it works, but it keeps hanging during the build.
    // webpack has been overidden above, but maybe this is a better option if we can get it to work.
    // {
    //   name: "@storybook/addon-react-native-web",
    //   options: {
    //     modulesToAlias: {
    //       "react-native-linear-gradient": "react-native-web-linear-gradient",
    //     },
    //   },
    // },
  ],
  framework: "@storybook/react",
  webpackFinal: getConfig,
};
