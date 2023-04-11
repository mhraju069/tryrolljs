import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { StyleSheet, View } from 'react-native';
import 'native-base';
import 'react';
import '../../atoms/typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import '../../atoms/button/index.js';
import { ButtonV2 } from '../../atoms/buttonV2/index.js';
import '../../atoms/circleImg/index.js';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import { isLast } from '../../utils/functions.js';
import '../../utils/web3.js';
import '@floating-ui/react-native';
import '../../atoms/input/index.js';
import 'react-native-svg';
import { Web3Button } from '../web3Button/index.js';

var styles = StyleSheet.create({
  mainContainer: {}
});
var DesktopHeader = function (_a) {
  var logo = _a.logo,
    options = _a.options,
    _b = _a.withConnectWallet,
    withConnectWallet = _b === void 0 ? false : _b;
  return jsxs(View, __assign({
    style: [padding.ph40, padding.pv24, container.row, container.alignCenter, container.justifySpaceBetween, styles.mainContainer]
  }, {
    children: [logo.desktop, jsxs(View, __assign({
      style: [container.row, container.alignCenter]
    }, {
      children: [options.map(function (option, index) {
        return jsx(View, __assign({
          style: [(!isLast(index, options) || withConnectWallet) && margin.mr24]
        }, {
          children: jsx(ButtonV2, {
            size: "medium",
            variant: "text",
            title: option.title,
            onPress: option.onPress
          })
        }));
      }), withConnectWallet && jsx(Web3Button, {})]
    }))]
  }));
};

export { DesktopHeader };
