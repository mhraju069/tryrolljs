'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var index = require('../typography/index.js');

var asTextNode = function (node, color) {
  return typeof node === 'string' ? jsxRuntime.jsx(index.Body, tslib_es6.__assign({
    color: color
  }, {
    children: node
  })) : node;
};

exports.asTextNode = asTextNode;
