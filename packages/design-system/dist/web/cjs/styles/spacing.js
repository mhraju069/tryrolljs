'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../node_modules/tslib/tslib.es6.js');

var spacingValues = [4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 128, 'auto'];
var spacing = spacingValues.reduce(function (acc, spacingValue) {
  var _a;
  return tslib_es6.__assign(tslib_es6.__assign({}, acc), (_a = {}, _a[spacingValue] = spacingValue, _a));
}, {});

exports.spacing = spacing;
exports.spacingValues = spacingValues;
