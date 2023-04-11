'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var spacing = require('./spacing.js');
var utils = require('./utils.js');

var paddingPostfixes = ['', 't', 'b', 'r', 'l', 'v', 'h'];
var paddingStylePropByPostfix = {
  '': 'padding',
  t: 'paddingTop',
  b: 'paddingBottom',
  r: 'paddingRight',
  l: 'paddingLeft',
  v: 'paddingVertical',
  h: 'paddingHorizontal'
};
var paddingStyles = spacing.spacingValues.reduce(function (acc, value) {
  paddingPostfixes.forEach(function (postfix) {
    var _a;
    var key = "p".concat(postfix).concat(value);
    var property = paddingStylePropByPostfix[postfix];
    acc[key] = (_a = {}, _a[property] = value, _a);
  });
  return acc;
}, {});
var padding = utils.makeStyles(paddingStyles);

exports.padding = padding;
