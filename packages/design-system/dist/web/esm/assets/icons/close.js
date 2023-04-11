import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgClose = function SvgClose(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.227 7.227a.75.75 0 0 1 1.061 0l8.485 8.485a.75.75 0 1 1-1.06 1.061L7.227 8.288a.75.75 0 0 1 0-1.06Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.773 7.227a.75.75 0 0 1 0 1.06l-8.486 8.486a.75.75 0 0 1-1.06-1.06l8.485-8.486a.75.75 0 0 1 1.06 0Z"
  })));
};

export { SvgClose as default };
