import { __awaiter, __assign, __generator } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useCallback, useEffect } from 'react';
import { useClipboard, View, Pressable } from 'native-base';
import { Body } from '../../atoms/typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import 'react-native-web';
import '../../atoms/button/index.js';
import { lightestGray } from '../../styles/colors.js';
import { makeStyles } from '../../styles/utils.js';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import 'react-native-svg';
import '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '@floating-ui/react-dom-interactions';
import { truncateText } from '../../utils/formatters.js';
import '../../utils/web3.js';
import '../../atoms/input/index.js';
import SvgCopy from '../../assets/svg/copy.js';
import SvgCheck from '../../assets/svg/check.js';

var SUCCESS_TIMEOUT = 1000;
var DEFAULT_MAX_LENGTH = 40;
var styles = makeStyles({
  wrapper: {
    borderBottomWidth: 2,
    borderColor: lightestGray
  }
});
var CopyLink = function (_a) {
  var url = _a.url,
    _b = _a.maxLength,
    maxLength = _b === void 0 ? DEFAULT_MAX_LENGTH : _b;
  var _c = useState(false),
    showSuccess = _c[0],
    setShowSuccess = _c[1];
  var onCopy = useClipboard().onCopy;
  var handleCopy = useCallback(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
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
  useEffect(function () {
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
  return jsxs(View, __assign({
    style: [styles.wrapper, container.row, container.justifySpaceBetween, container.alignCenter, padding.pb4]
  }, {
    children: [jsx(Body, __assign({
      style: margin.mr8
    }, {
      children: truncateText(url, maxLength)
    })), showSuccess ? jsx(SvgCheck, {}) : jsx(Pressable, __assign({
      onPress: handleCopy
    }, {
      children: jsx(SvgCopy, {})
    }))]
  }));
};

export { CopyLink };
