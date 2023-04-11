'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactNative = require('react-native');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
var text = require('../../styles/text.js');
require('../../styles/container.js');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var weights = {
  bold: text.text.bold,
  semiBold: text.text.semiBold,
  regular: text.text.body
};
var truncateMaxChars = function (str, maxlimit) {
  if (maxlimit === void 0) {
    maxlimit = 100;
  }
  return str && str.length > maxlimit ? "".concat(str.substring(0, maxlimit - 3), "...") : str;
};
var TypographyBase = React__namespace.forwardRef(function (_a, ref) {
  var numberOfLines = _a.numberOfLines,
    onPress = _a.onPress,
    _b = _a.weight,
    weight = _b === void 0 ? 'regular' : _b,
    style = _a.style,
    color = _a.color,
    children = _a.children,
    fontSize = _a.fontSize,
    underline = _a.underline;
  return jsxRuntime.jsx(reactNative.Text
  // react's ref does not match react-native ref type - react native using legacy ref.
  // perhaps there is a workaround to properly type it?
  // @ts-ignore
  , tslib_es6.__assign({
    // react's ref does not match react-native ref type - react native using legacy ref.
    // perhaps there is a workaround to properly type it?
    // @ts-ignore
    ref: ref,
    numberOfLines: numberOfLines,
    testID: "typographyBody",
    onPress: onPress,
    style: [{
      fontSize: fontSize,
      color: color,
      textDecorationLine: underline ? 'underline' : 'none'
    }, weights[weight], style]
  }, {
    children: children
  }));
});
var SubCaption = function (_a) {
  var props = tslib_es6.__rest(_a, []);
  return jsxRuntime.jsx(TypographyBase, tslib_es6.__assign({}, props, {
    fontSize: text.FONT_SIZE_SUB_CAPTION
  }));
};
var Caption = function (_a) {
  var props = tslib_es6.__rest(_a, []);
  return jsxRuntime.jsx(TypographyBase, tslib_es6.__assign({}, props, {
    fontSize: text.FONT_SIZE_CAPTION
  }));
};
var Body = React__namespace.forwardRef(function (_a, ref) {
  var props = tslib_es6.__rest(_a, []);
  return jsxRuntime.jsx(TypographyBase, tslib_es6.__assign({
    ref: ref
  }, props, {
    fontSize: text.FONT_SIZE_BODY
  }));
});
var SubHeader = function (_a) {
  var props = tslib_es6.__rest(_a, []);
  return jsxRuntime.jsx(TypographyBase, tslib_es6.__assign({}, props, {
    fontSize: text.FONT_SIZE_SUB_HEADER
  }));
};
var Header = function (_a) {
  var props = tslib_es6.__rest(_a, []);
  return jsxRuntime.jsx(TypographyBase, tslib_es6.__assign({}, props, {
    fontSize: text.FONT_SIZE_HEADER
  }));
};
var LargeHeader = function (_a) {
  var props = tslib_es6.__rest(_a, []);
  return jsxRuntime.jsx(TypographyBase, tslib_es6.__assign({}, props, {
    fontSize: text.FONT_SIZE_LARGE_HEADER
  }));
};
var Title = function (_a) {
  var props = tslib_es6.__rest(_a, []);
  return jsxRuntime.jsx(TypographyBase, tslib_es6.__assign({}, props, {
    fontSize: text.FONT_SIZE_TITLE
  }));
};
var LargeTitle = function (_a) {
  var props = tslib_es6.__rest(_a, []);
  return jsxRuntime.jsx(TypographyBase, tslib_es6.__assign({}, props, {
    fontSize: text.FONT_SIZE_LARGE_TITLE
  }));
};

exports.Body = Body;
exports.Caption = Caption;
exports.Header = Header;
exports.LargeHeader = LargeHeader;
exports.LargeTitle = LargeTitle;
exports.SubCaption = SubCaption;
exports.SubHeader = SubHeader;
exports.Title = Title;
exports.TypographyBase = TypographyBase;
exports.truncateMaxChars = truncateMaxChars;
