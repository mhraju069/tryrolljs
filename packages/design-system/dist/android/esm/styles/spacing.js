import { __assign } from '../node_modules/tslib/tslib.es6.js';

var spacingValues = [4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 128, 'auto'];
var spacing = spacingValues.reduce(function (acc, spacingValue) {
  var _a;
  return __assign(__assign({}, acc), (_a = {}, _a[spacingValue] = spacingValue, _a));
}, {});

export { spacing, spacingValues };
