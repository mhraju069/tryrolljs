'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
require('react');
var index$3 = require('../../atoms/typography/index.js');
var theme = require('../../hooks/theme.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var web3 = require('../../hooks/web3.js');
require('react-native');
var index$4 = require('../../atoms/button/index.js');
require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
require('react-native-svg');
var index = require('../../atoms/spinner/index.js');
require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
var web3$1 = require('../../utils/web3.js');
require('@floating-ui/react-native');
require('../../atoms/input/index.js');
var index$1 = require('../dropdown/index.js');
var index$2 = require('../accountDropdown/index.js');

var ConnectWeb3Button = function (_a) {
  var buttonStyle = _a.buttonStyle,
    onPress = _a.onPress,
    activity = _a.activity;
  var address = web3.useEthAddress();
  var theme$1 = theme.useTheme();
  if (activity) {
    return jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
      style: [container.container.alignCenter, container.container.justifyCenter, container.container.fullHeight, padding.padding.p4]
    }, {
      children: jsxRuntime.jsx(index.Spinner, {})
    }));
  }
  if (address) {
    return jsxRuntime.jsx(index$1.Dropdown, tslib_es6.__assign({
      renderDropdown: function () {
        return jsxRuntime.jsx(index$2.AccountDropdown, {
          onSwitchAccounts: onPress
        });
      }
    }, {
      children: jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
        style: [container.container.row, padding.padding.p8, container.container.borderRadius, {
          backgroundColor: theme$1.background.page
        }]
      }, {
        children: jsxRuntime.jsx(index$3.Body, {
          children: web3$1.shortenAddress(address)
        })
      }))
    }));
  }
  return jsxRuntime.jsx(index$4.Button, {
    style: buttonStyle,
    variant: "primary",
    title: "Connect Wallet",
    onPress: onPress
  });
};

exports.ConnectWeb3Button = ConnectWeb3Button;
