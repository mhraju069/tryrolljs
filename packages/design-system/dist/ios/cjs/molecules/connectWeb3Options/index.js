'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var nativeBase = require('native-base');
var close = require('../../assets/svg/close.js');
var colors = require('../../styles/colors.js');
var utils = require('../../styles/utils.js');
var margin = require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
var text = require('../../styles/text.js');
var container = require('../../styles/container.js');
var index$1 = require('../../atoms/anchor/index.js');
require('../../atoms/button/index.js');
require('react-native');
var theme = require('../../hooks/theme.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var web3 = require('../../hooks/web3.js');
require('react-native-svg');
require('../../atoms/circleImg/index.js');
var index = require('../../atoms/typography/index.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
require('../../utils/web3.js');
require('@floating-ui/react-native');
require('../../atoms/input/index.js');
var index$2 = require('../../constants/index.js');
var walletConnectorOptions = require('./walletConnectorOptions.js');

var styles = utils.makeStyles({
  wrapper: {
    minWidth: 350,
    maxWidth: 600
  },
  option: {
    borderWidth: 1
  },
  termsAndConditions: {
    width: '80%'
  }
});
var ConnectWeb3Options = function (_a) {
  var onSelect = _a.onSelect,
    onClose = _a.onClose,
    mobile = _a.mobile;
  var theme$1 = theme.useTheme();
  var _b = React.useState(null),
    selectedIdx = _b[0],
    setSelectedIdx = _b[1];
  var _c = web3.useWeb3Conntectors(),
    connectors = _c.connectors,
    handleConnect = _c.handleConnect;
  var walletOptions = React.useMemo(function () {
    return mobile ? walletConnectorOptions.buildWalletOptionsMobile(connectors) : walletConnectorOptions.buildWalletOptionsWeb(connectors);
  }, [connectors, mobile]);
  var _select = function (connector, idx) {
    setSelectedIdx(idx);
    handleConnect(connector);
    onSelect && onSelect();
  };
  return jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
    style: [styles.wrapper, container.container.borderRadiusXL, {
      backgroundColor: theme$1.background.primary
    }]
  }, {
    children: [jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
      style: [container.container.row, container.container.justifySpaceBetween, padding.padding.p16]
    }, {
      children: [jsxRuntime.jsx(index.SubHeader, tslib_es6.__assign({
        weight: "bold"
      }, {
        children: "Connect Wallet"
      })), jsxRuntime.jsx(nativeBase.Pressable, tslib_es6.__assign({
        onPress: onClose
      }, {
        children: jsxRuntime.jsx(close, {})
      }))]
    })), jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
      style: [container.container.alignCenter, container.container.borderRadius, padding.padding.p16, {
        backgroundColor: theme$1.background.primary
      }]
    }, {
      children: [walletOptions.map(function (o, i) {
        return jsxRuntime.jsx(ConnectWalletOption, {
          active: i === selectedIdx,
          title: o.provider.title,
          logo: o.provider.logo,
          onPress: function () {
            return _select(o.connector, i);
          }
        }, i);
      }), jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
        style: [container.container.justifyCenter, styles.termsAndConditions]
      }, {
        children: jsxRuntime.jsxs(index.Body, tslib_es6.__assign({
          style: text.text.center
        }, {
          children: ["By connecting, you accept the", ' ', jsxRuntime.jsx(index$1.Anchor, tslib_es6.__assign({
            href: index$2.stakingTermsUrl
          }, {
            children: "Terms of Service"
          })), " for using the Roll protocol"]
        }))
      }))]
    }))]
  }));
};
var ConnectWalletOption = function (_a) {
  var title = _a.title,
    logo = _a.logo,
    active = _a.active,
    onPress = _a.onPress;
  var theme$1 = theme.useTheme();
  return jsxRuntime.jsxs(nativeBase.Pressable, tslib_es6.__assign({
    onPress: onPress,
    style: [container.container.row, container.container.justifySpaceBetween, container.container.borderRadiusSM, padding.padding.p16, margin.margin.mb8, container.container.fullWidth, styles.option, {
      borderColor: active ? theme$1.background.highlight : colors.lightestGray
    }]
  }, {
    children: [jsxRuntime.jsx(index.SubHeader, {
      children: title
    }), logo]
  }));
};

exports.ConnectWeb3Options = ConnectWeb3Options;
