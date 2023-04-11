import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2, _Path3;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgOutside = function SvgOutside(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.25 12C1.25 6.066 6.066 1.25 12 1.25a.75.75 0 0 1 0 1.5c-5.106 0-9.25 4.144-9.25 9.25s4.144 9.25 9.25 9.25 9.25-4.144 9.25-9.25a.75.75 0 0 1 1.5 0c0 5.934-4.816 10.75-10.75 10.75S1.25 17.934 1.25 12Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.73 2.27a.75.75 0 0 1 0 1.06l-8.2 8.2a.75.75 0 1 1-1.06-1.06l8.2-8.2a.75.75 0 0 1 1.06 0Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.42 2a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v4.83a.75.75 0 0 1-1.5 0V2.75h-4.08a.75.75 0 0 1-.75-.75Z"
  })));
};

export { SvgOutside as default };
