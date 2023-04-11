'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var react = require('@web3modal/react');
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
var index$2 = require('../../atoms/buttonV2/index.js');
var index = require('../../atoms/circleImg/index.js');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
require('../../styles/container.js');
require('../../atoms/toast/index.js');
require('@floating-ui/react-dom-interactions');
var web3 = require('../../utils/web3.js');
require('../../atoms/input/index.js');
var index$1 = require('../../atoms/icon/index.js');
var web3Wagmi = require('../../hooks/web3Wagmi.js');

var Web3Button = function (_a) {
  var _b = _a.connectedVariant,
    connectedVariant = _b === void 0 ? 'button' : _b;
  var _c = react.useWeb3Modal(),
    isOpen = _c.isOpen,
    open = _c.open;
  var userAddress = web3Wagmi.useEthAddress();
  var handleConnect = function () {
    return tslib_es6.__awaiter(void 0, void 0, void 0, function () {
      return tslib_es6.__generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (isOpen) return [2 /*return*/];
            return [4 /*yield*/, open({
              route: userAddress ? 'Account' : 'ConnectWallet'
            })];
          case 1:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  };

  var title = userAddress ? web3.shortenAddress(userAddress) : 'Connect Wallet';
  var icon = userAddress ? jsxRuntime.jsx(index.CircleImg, {
    size: 16
  }) : jsxRuntime.jsx(index$1.Icon, {
    variant: "wallet"
  });
  if (userAddress && connectedVariant === 'avatar') {
    return jsxRuntime.jsx(reactNativeWeb.Pressable, tslib_es6.__assign({
      onPress: handleConnect
    }, {
      children: jsxRuntime.jsx(index.CircleImg, {
        size: 40
      })
    }));
  }
  // TODO: add details variant once we have the component ready
  return jsxRuntime.jsx(index$2.ButtonV2, {
    size: "small",
    variant: "tertiary",
    title: title,
    icon: icon,
    isDisabled: isOpen,
    onPress: handleConnect
  });
};

exports.Web3Button = Web3Button;
