import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2, _Path3;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgCloseCircle = function SvgCloseCircle(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.25 12C1.25 6.086 6.086 1.25 12 1.25S22.75 6.086 22.75 12 17.914 22.75 12 22.75 1.25 17.914 1.25 12ZM12 2.75c-5.086 0-9.25 4.164-9.25 9.25s4.164 9.25 9.25 9.25 9.25-4.164 9.25-9.25S17.086 2.75 12 2.75Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.36 8.64a.75.75 0 0 1 0 1.06L9.7 15.36a.75.75 0 0 1-1.06-1.06l5.66-5.66a.75.75 0 0 1 1.06 0Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.64 8.64a.75.75 0 0 1 1.06 0l5.66 5.66a.75.75 0 0 1-1.06 1.06L8.64 9.7a.75.75 0 0 1 0-1.06Z"
  })));
};

export { SvgCloseCircle as default };
