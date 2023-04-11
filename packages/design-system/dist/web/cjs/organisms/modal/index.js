'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var reactNativeWeb = require('react-native-web');
require('react');
var index = require('../../atoms/typography/index.js');
var theme = require('../../hooks/theme.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
var modal = require('../../hooks/modal.js');
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
require('@floating-ui/react-dom-interactions');
require('../../utils/web3.js');
require('../../atoms/input/index.js');
var closeCircle = require('../../assets/svg/closeCircle.js');

var styles = utils.makeStyles({
  closeButton: {
    position: 'absolute',
    zIndex: 1,
    right: 32,
    top: 24
  },
  content: {
    backgroundColor: colors.white
  }
});
var Modal = function (props) {
  var modal$1 = modal.useModal();
  var _a = reactNativeWeb.useWindowDimensions(),
    height = _a.height,
    width = _a.width;
  return jsxRuntime.jsx(nativeBase.Modal, tslib_es6.__assign({
    onClose: modal$1.close,
    isOpen: modal$1.isOpen,
    _overlay: {
      style: {
        height: height,
        width: width
      }
    }
  }, props));
};
var ModalContent = function (props) {
  return jsxRuntime.jsx(nativeBase.Modal.Content, tslib_es6.__assign({}, props, {
    style: [props.style, styles.content]
  }));
};
var ModalHeader = function (_a) {
  var style = _a.style,
    children = _a.children;
  return jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
    style: [style, padding.padding.ph40, padding.padding.pt24, padding.padding.pb8]
  }, {
    children: jsxRuntime.jsx(index.LargeHeader, tslib_es6.__assign({
      weight: "semiBold"
    }, {
      children: children
    }))
  }));
};
var ModalSubHeader = function (_a) {
  var style = _a.style,
    children = _a.children;
  var theme$1 = theme.useTheme();
  return jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
    style: [style, padding.padding.ph40, padding.padding.pb8]
  }, {
    children: jsxRuntime.jsx(index.Body, tslib_es6.__assign({
      color: theme$1.text.secondary
    }, {
      children: children
    }))
  }));
};
var ModalBody = function (_a) {
  var style = _a.style,
    children = _a.children,
    rest = tslib_es6.__rest(_a, ["style", "children"]);
  return jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
    style: [style, padding.padding.ph40, padding.padding.pv16]
  }, rest, {
    children: children
  }));
};
var ModalFooter = function (_a) {
  var style = _a.style,
    children = _a.children;
  return jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
    style: [style, container.container.row, margin.margin.mlauto, padding.padding.ph40, padding.padding.pt16, padding.padding.pb24]
  }, {
    children: children
  }));
};
var ModalCloseButton = function (_a) {
  var onPress = _a.onPress;
  return jsxRuntime.jsx(nativeBase.Pressable, tslib_es6.__assign({
    style: styles.closeButton,
    onPress: onPress
  }, {
    children: jsxRuntime.jsx(closeCircle, {})
  }));
};
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.SubHeader = ModalSubHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.CloseButton = ModalCloseButton;

exports.Modal = Modal;
