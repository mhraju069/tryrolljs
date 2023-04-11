import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgShareNetwork = function SvgShareNetwork(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 15a3.722 3.722 0 0 0-2.681 1.135L9.497 13.36a3.778 3.778 0 0 0 0-2.72l4.322-2.774A3.75 3.75 0 1 0 12.75 5.25c.002.465.087.926.253 1.36L8.681 9.385a3.75 3.75 0 1 0 0 5.23l4.322 2.776A3.75 3.75 0 1 0 16.5 15Zm0-12a2.25 2.25 0 1 1-2.25 2.25A2.26 2.26 0 0 1 16.5 3ZM6 14.25A2.25 2.25 0 1 1 8.25 12 2.26 2.26 0 0 1 6 14.25ZM16.5 21a2.25 2.25 0 1 1 2.25-2.25A2.26 2.26 0 0 1 16.5 21Z"
  })));
};

export { SvgShareNetwork as default };
