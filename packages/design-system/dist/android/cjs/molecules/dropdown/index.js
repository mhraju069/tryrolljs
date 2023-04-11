'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var nativeBase = require('native-base');
require('../../atoms/typography/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('react-native');
require('../../atoms/button/index.js');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
require('../../styles/container.js');
require('react-native-svg');
require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
require('../../utils/web3.js');
var index_native = require('../../atoms/popover/index.js');
require('../../atoms/input/index.js');

var Dropdown = function (_a) {
  var children = _a.children,
    open = _a.open,
    renderDropdown = _a.renderDropdown;
  var _b = React.useState(open),
    isOpen = _b[0],
    setIsOpen = _b[1];
  var renderReference = React.useCallback(function (_a) {
    var reference = _a.reference,
      getReferenceProps = _a.getReferenceProps;
    return jsxRuntime.jsx(nativeBase.Pressable, tslib_es6.__assign({}, getReferenceProps(), {
      children: jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
        ref: reference
      }, {
        children: children
      }))
    }));
  }, [children]);
  return jsxRuntime.jsx(index_native.Popover, tslib_es6.__assign({
    open: !!(isOpen || open),
    onOpenChange: setIsOpen,
    renderReference: renderReference
  }, {
    children: renderDropdown()
  }));
};

exports.Dropdown = Dropdown;
