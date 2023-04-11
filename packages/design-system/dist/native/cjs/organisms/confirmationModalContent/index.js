'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('native-base');
require('react');
require('../../atoms/typography/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('react-native');
var index$1 = require('../../atoms/button/index.js');
var margin = require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
require('../../styles/container.js');
require('react-native-svg');
require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
require('../../utils/web3.js');
require('@floating-ui/react-native');
require('../../atoms/input/index.js');
var index = require('../modal/index.js');

var ConfirmationModalContent = function (_a) {
  var title = _a.title,
    _b = _a.description,
    description = _b === void 0 ? '' : _b,
    confirmAction = _a.confirmAction,
    cancelAction = _a.cancelAction,
    children = _a.children;
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: jsxRuntime.jsxs(index.Modal.Content, {
      children: [jsxRuntime.jsx(index.Modal.CloseButton, {
        onPress: cancelAction.onPress
      }), jsxRuntime.jsx(index.Modal.Header, {
        children: title
      }), jsxRuntime.jsx(index.Modal.SubHeader, {
        children: description
      }), jsxRuntime.jsx(index.Modal.Body, {
        children: children
      }), jsxRuntime.jsxs(index.Modal.Footer, {
        children: [jsxRuntime.jsx(index$1.Button, {
          title: cancelAction.title,
          variant: "secondary",
          onPress: cancelAction.onPress,
          style: margin.margin.mr16
        }), jsxRuntime.jsx(index$1.Button, {
          title: confirmAction.title,
          variant: "primary",
          onPress: confirmAction.onPress
        })]
      })]
    })
  });
};

exports.ConfirmationModalContent = ConfirmationModalContent;
