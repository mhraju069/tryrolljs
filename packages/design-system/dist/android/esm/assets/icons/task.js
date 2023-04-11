import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgTask = function SvgTask(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.25 19.5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75ZM10.25 12.5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75ZM10.25 5.5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75ZM7.53 2.97a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47 2.47-2.47a.75.75 0 0 1 1.06 0ZM7.53 9.97a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 2.47-2.47a.75.75 0 0 1 1.06 0ZM7.53 16.97a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 2.47-2.47a.75.75 0 0 1 1.06 0Z"
  })));
};

export { SvgTask as default };
