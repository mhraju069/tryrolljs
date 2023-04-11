import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgOutgoing = function SvgOutgoing(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.01 2.75a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-1.5 0v-17a.75.75 0 0 1 .75-.75ZM13.46 2.97a.75.75 0 0 1 1.06 0l5.02 5.01a.75.75 0 1 1-1.06 1.06l-5.02-5.01a.75.75 0 0 1 0-1.06Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.99 2.75a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-1.5 0v-17a.75.75 0 0 1 .75-.75Z"
  })));
};

export { SvgOutgoing as default };
