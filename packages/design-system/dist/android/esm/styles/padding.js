import { spacingValues } from './spacing.js';
import { makeStyles } from './utils.js';

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
var paddingStyles = spacingValues.reduce(function (acc, value) {
  paddingPostfixes.forEach(function (postfix) {
    var _a;
    var key = "p".concat(postfix).concat(value);
    var property = paddingStylePropByPostfix[postfix];
    acc[key] = (_a = {}, _a[property] = value, _a);
  });
  return acc;
}, {});
var padding = makeStyles(paddingStyles);

export { padding };
