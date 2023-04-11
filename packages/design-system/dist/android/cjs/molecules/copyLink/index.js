'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var nativeBase = require('native-base');
var index = require('../../atoms/typography/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('react-native');
require('../../atoms/button/index.js');
var colors = require('../../styles/colors.js');
var utils = require('../../styles/utils.js');
var margin = require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
require('react-native-svg');
require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
var formatters = require('../../utils/formatters.js');
require('../../utils/web3.js');
require('@floating-ui/react-native');
require('../../atoms/input/index.js');
var copy = require('../../assets/svg/copy.js');
var check = require('../../assets/svg/check.js');

var SUCCESS_TIMEOUT = 1000;
var DEFAULT_MAX_LENGTH = 40;
var styles = utils.makeStyles({
  wrapper: {
    borderBottomWidth: 2,
    borderColor: colors.lightestGray
  }
});
var CopyLink = function (_a) {
  var url = _a.url,
    _b = _a.maxLength,
    maxLength = _b === void 0 ? DEFAULT_MAX_LENGTH : _b;
  var _c = React.useState(false),
    showSuccess = _c[0],
    setShowSuccess = _c[1];
  var onCopy = nativeBase.useClipboard().onCopy;
  var handleCopy = React.useCallback(function () {
    return tslib_es6.__awaiter(void 0, void 0, void 0, function () {
      return tslib_es6.__generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            setShowSuccess(true);
            return [4 /*yield*/, onCopy(url)];
          case 1:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  }, [onCopy, url]);
  React.useEffect(function () {
    if (showSuccess) {
      var timeoutId_1 = setTimeout(function () {
        setTimeout(function () {
          setShowSuccess(false);
        }, SUCCESS_TIMEOUT);
      });
      return function () {
        clearTimeout(timeoutId_1);
      };
    }
  }, [showSuccess]);
  return jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
    style: [styles.wrapper, container.container.row, container.container.justifySpaceBetween, container.container.alignCenter, padding.padding.pb4]
  }, {
    children: [jsxRuntime.jsx(index.Body, tslib_es6.__assign({
      style: margin.margin.mr8
    }, {
      children: formatters.truncateText(url, maxLength)
    })), showSuccess ? jsxRuntime.jsx(check, {}) : jsxRuntime.jsx(nativeBase.Pressable, tslib_es6.__assign({
      onPress: handleCopy
    }, {
      children: jsxRuntime.jsx(copy, {})
    }))]
  }));
};

exports.CopyLink = CopyLink;
