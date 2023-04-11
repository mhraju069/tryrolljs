'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var React = require('react');
var index = require('../../atoms/typography/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('react-native');
require('../../atoms/button/index.js');
var margin = require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
require('react-native-svg');
require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
require('../../utils/web3.js');
require('@floating-ui/react-native');
require('../../atoms/input/index.js');

var Information = function (_a) {
  var children = _a.children;
  var childrenCount = React.Children.count(children);
  return jsxRuntime.jsx(nativeBase.View, {
    children: React.Children.map(children, function (child, index) {
      var isLast = index + 1 === childrenCount;
      return child ? React.cloneElement(child, tslib_es6.__assign(tslib_es6.__assign({}, child.props), {
        style: [child.props.style, !isLast && margin.margin.mb8]
      })) : child;
    })
  });
};
var InformationItem = function (_a) {
  var label = _a.label,
    value = _a.value,
    style = _a.style;
  var responsiveStyle = nativeBase.useBreakpointValue({
    base: undefined,
    lg: container.container.row
  });
  var labelResponsiveStyle = nativeBase.useBreakpointValue({
    base: margin.margin.mb4,
    lg: undefined
  });
  return jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
    style: [responsiveStyle, container.container.justifySpaceBetween, style]
  }, {
    children: [jsxRuntime.jsx(index.SubHeader, tslib_es6.__assign({
      style: labelResponsiveStyle,
      weight: "semiBold"
    }, {
      children: label
    })), value]
  }));
};
Information.Item = InformationItem;

exports.Information = Information;
