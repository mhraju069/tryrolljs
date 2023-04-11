'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var spacing = require('./spacing.js');
var utils = require('./utils.js');

var marginPostfixes = ['', 't', 'b', 'r', 'l', 'v', 'h'];
var marginStylePropByPostfix = {
  '': 'margin',
  t: 'marginTop',
  b: 'marginBottom',
  r: 'marginRight',
  l: 'marginLeft',
  v: 'marginVertical',
  h: 'marginHorizontal'
};
var marginStyles = spacing.spacingValues.reduce(function (acc, value) {
  marginPostfixes.forEach(function (postfix) {
    var _a;
    var key = "m".concat(postfix).concat(value);
    var property = marginStylePropByPostfix[postfix];
    acc[key] = (_a = {}, _a[property] = value, _a);
  });
  return acc;
}, {});
var margin = utils.makeStyles(marginStyles);

exports.margin = margin;
