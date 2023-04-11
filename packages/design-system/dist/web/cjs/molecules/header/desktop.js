'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNativeWeb = require('react-native-web');
require('native-base');
require('react');
require('../../atoms/typography/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('../../atoms/button/index.js');
var index = require('../../atoms/buttonV2/index.js');
require('../../atoms/circleImg/index.js');
var margin = require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
require('../../atoms/toast/index.js');
require('@floating-ui/react-dom-interactions');
var functions = require('../../utils/functions.js');
require('../../utils/web3.js');
require('../../atoms/input/index.js');
require('react-native-svg');
var index$1 = require('../web3Button/index.js');

var styles = reactNativeWeb.StyleSheet.create({
  mainContainer: {}
});
var DesktopHeader = function (_a) {
  var logo = _a.logo,
    options = _a.options,
    _b = _a.withConnectWallet,
    withConnectWallet = _b === void 0 ? false : _b;
  return jsxRuntime.jsxs(reactNativeWeb.View, tslib_es6.__assign({
    style: [padding.padding.ph40, padding.padding.pv24, container.container.row, container.container.alignCenter, container.container.justifySpaceBetween, styles.mainContainer]
  }, {
    children: [logo.desktop, jsxRuntime.jsxs(reactNativeWeb.View, tslib_es6.__assign({
      style: [container.container.row, container.container.alignCenter]
    }, {
      children: [options.map(function (option, index$1) {
        return jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
          style: [(!functions.isLast(index$1, options) || withConnectWallet) && margin.margin.mr24]
        }, {
          children: jsxRuntime.jsx(index.ButtonV2, {
            size: "medium",
            variant: "text",
            title: option.title,
            onPress: option.onPress
          })
        }));
      }), withConnectWallet && jsxRuntime.jsx(index$1.Web3Button, {})]
    }))]
  }));
};

exports.DesktopHeader = DesktopHeader;
