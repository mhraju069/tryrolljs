import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgArrowLeft2 = function SvgArrowLeft2(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.1 5.4a.75.75 0 0 1 0 1.06L4.56 12l5.54 5.54a.75.75 0 0 1-1.06 1.06l-6.07-6.07a.75.75 0 0 1 0-1.06L9.04 5.4a.75.75 0 0 1 1.06 0Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.92 12a.75.75 0 0 1 .75-.75H20.5a.75.75 0 0 1 0 1.5H3.67a.75.75 0 0 1-.75-.75Z"
  })));
};

export { SvgArrowLeft2 as default };
