import { spacingValues } from './spacing.js';
import { makeStyles } from './utils.js';

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
var marginStyles = spacingValues.reduce(function (acc, value) {
  marginPostfixes.forEach(function (postfix) {
    var _a;
    var key = "m".concat(postfix).concat(value);
    var property = marginStylePropByPostfix[postfix];
    acc[key] = (_a = {}, _a[property] = value, _a);
  });
  return acc;
}, {});
var margin = makeStyles(marginStyles);

export { margin };
