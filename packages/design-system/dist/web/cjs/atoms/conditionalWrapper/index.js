'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

var ConditionalWrapper = function (_a) {
  var condition = _a.condition,
    wrapper = _a.wrapper,
    children = _a.children;
  return condition ? wrapper(children) : jsxRuntime.jsx(React.Fragment, {
    children: children
  });
};

exports.ConditionalWrapper = ConditionalWrapper;
