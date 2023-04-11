import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

var _G, _Defs;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgCircleCheckFill = function SvgCircleCheckFill(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _G || (_G = /*#__PURE__*/React.createElement(G, {
    clipPath: "url(#circle-check-fill_svg__a)"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M10.58 15.58a.75.75 0 0 1-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.67 5.67a.75.75 0 0 1-.53.22Z"
  }))), _Defs || (_Defs = /*#__PURE__*/React.createElement(Defs, null, /*#__PURE__*/React.createElement(ClipPath, {
    id: "circle-check-fill_svg__a"
  }, /*#__PURE__*/React.createElement(Path, {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  })))));
};

export { SvgCircleCheckFill as default };
