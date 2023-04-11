'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var index$1 = require('../../atoms/anchor/index.js');
require('../../atoms/button/index.js');
require('react');
require('react-native-web');
var theme = require('../../hooks/theme.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var web3 = require('../../hooks/web3.js');
var utils = require('../../styles/utils.js');
var margin = require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
require('react-native-svg');
require('../../atoms/circleImg/index.js');
var index = require('../../atoms/typography/index.js');
require('../../atoms/toast/index.js');
require('@floating-ui/react-dom-interactions');
var web3$1 = require('../../utils/web3.js');
require('../../atoms/input/index.js');
var copy = require('../../assets/svg/copy.js');
var wallet = require('../../assets/svg/wallet.js');
var link = require('../../assets/svg/link.js');

var styles = utils.makeStyles({
  container: {
    minWidth: 320
  },
  address: {
    maxWidth: 150
  }
});
var SwitchAccountLink = function (_a) {
  var icon = _a.icon,
    title = _a.title,
    onPress = _a.onPress,
    href = _a.href;
  var theme$1 = theme.useTheme();
  return jsxRuntime.jsx(index$1.Anchor, tslib_es6.__assign({
    target: "_blank",
    href: href,
    onPress: onPress
  }, {
    children: jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
      style: [container.container.row, container.container.alignCenter, margin.margin.mh8]
    }, {
      children: [icon, jsxRuntime.jsx(index.Body, tslib_es6.__assign({
        onPress: onPress,
        style: margin.margin.ml4,
        color: theme$1.text.highlight
      }, {
        children: title
      }))]
    }))
  }));
};
var AccountDropdown = function (_a) {
  var onSwitchAccounts = _a.onSwitchAccounts;
  var theme$1 = theme.useTheme();
  var address = web3.useEthAddress();
  return jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
    style: [padding.padding.p8, styles.container]
  }, {
    children: [jsxRuntime.jsx(index.Body, tslib_es6.__assign({
      color: theme$1.text.secondary
    }, {
      children: "Connected with MetaMask"
    })), jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
      style: [container.container.row, styles.address, padding.padding.p8, container.container.borderRadius, margin.margin.mv8, {
        backgroundColor: theme$1.background.page
      }]
    }, {
      children: [jsxRuntime.jsx(index.Body, tslib_es6.__assign({
        weight: "bold",
        style: margin.margin.mr8
      }, {
        children: web3$1.shortenAddress(address || '')
      })), jsxRuntime.jsx(copy, {})]
    })), jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
      style: container.container.row
    }, {
      children: [jsxRuntime.jsx(SwitchAccountLink, {
        onPress: onSwitchAccounts,
        icon: jsxRuntime.jsx(wallet, {}),
        title: "Switch Accounts"
      }), jsxRuntime.jsx(SwitchAccountLink, {
        icon: jsxRuntime.jsx(link, {}),
        title: "View on Etherscan",
        href: web3$1.etherscanAccountUrl(address || '')
      })]
    }))]
  }));
};

exports.AccountDropdown = AccountDropdown;
