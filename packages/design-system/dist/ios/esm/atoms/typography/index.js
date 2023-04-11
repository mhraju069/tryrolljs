import { __assign, __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { Text } from 'react-native';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import { text, FONT_SIZE_BODY, FONT_SIZE_SUB_CAPTION, FONT_SIZE_CAPTION, FONT_SIZE_SUB_HEADER, FONT_SIZE_HEADER, FONT_SIZE_LARGE_HEADER, FONT_SIZE_TITLE, FONT_SIZE_LARGE_TITLE } from '../../styles/text.js';
import '../../styles/container.js';

var weights = {
  bold: text.bold,
  semiBold: text.semiBold,
  regular: text.body
};
var truncateMaxChars = function (str, maxlimit) {
  if (maxlimit === void 0) {
    maxlimit = 100;
  }
  return str && str.length > maxlimit ? "".concat(str.substring(0, maxlimit - 3), "...") : str;
};
var TypographyBase = React.forwardRef(function (_a, ref) {
  var numberOfLines = _a.numberOfLines,
    onPress = _a.onPress,
    _b = _a.weight,
    weight = _b === void 0 ? 'regular' : _b,
    style = _a.style,
    color = _a.color,
    children = _a.children,
    fontSize = _a.fontSize,
    underline = _a.underline;
  return jsx(Text
  // react's ref does not match react-native ref type - react native using legacy ref.
  // perhaps there is a workaround to properly type it?
  // @ts-ignore
  , __assign({
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
  var props = __rest(_a, []);
  return jsx(TypographyBase, __assign({}, props, {
    fontSize: FONT_SIZE_SUB_CAPTION
  }));
};
var Caption = function (_a) {
  var props = __rest(_a, []);
  return jsx(TypographyBase, __assign({}, props, {
    fontSize: FONT_SIZE_CAPTION
  }));
};
var Body = React.forwardRef(function (_a, ref) {
  var props = __rest(_a, []);
  return jsx(TypographyBase, __assign({
    ref: ref
  }, props, {
    fontSize: FONT_SIZE_BODY
  }));
});
var SubHeader = function (_a) {
  var props = __rest(_a, []);
  return jsx(TypographyBase, __assign({}, props, {
    fontSize: FONT_SIZE_SUB_HEADER
  }));
};
var Header = function (_a) {
  var props = __rest(_a, []);
  return jsx(TypographyBase, __assign({}, props, {
    fontSize: FONT_SIZE_HEADER
  }));
};
var LargeHeader = function (_a) {
  var props = __rest(_a, []);
  return jsx(TypographyBase, __assign({}, props, {
    fontSize: FONT_SIZE_LARGE_HEADER
  }));
};
var Title = function (_a) {
  var props = __rest(_a, []);
  return jsx(TypographyBase, __assign({}, props, {
    fontSize: FONT_SIZE_TITLE
  }));
};
var LargeTitle = function (_a) {
  var props = __rest(_a, []);
  return jsx(TypographyBase, __assign({}, props, {
    fontSize: FONT_SIZE_LARGE_TITLE
  }));
};

export { Body, Caption, Header, LargeHeader, LargeTitle, SubCaption, SubHeader, Title, TypographyBase, truncateMaxChars };
