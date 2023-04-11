import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { Body } from '../typography/index.js';

var asTextNode = function (node, color) {
  return typeof node === 'string' ? jsx(Body, __assign({
    color: color
  }, {
    children: node
  })) : node;
};

export { asTextNode };
