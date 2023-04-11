import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgCopy = function SvgCopy(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 16 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    d: "M10.666 3.667h-8c-.733 0-1.333.6-1.333 1.333v9.333h1.333V5h8V3.667Zm2 2.666H5.333C4.6 6.333 4 6.933 4 7.667V17c0 .733.6 1.333 1.333 1.333h7.333c.734 0 1.334-.6 1.334-1.333V7.667c0-.734-.6-1.334-1.334-1.334Zm0 10.667H5.333V7.667h7.333V17Z",
    fill: "#7C7C7C"
  })));
};

export { SvgCopy as default };
