import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2, _Path3;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgCloseCircle = function SvgCloseCircle(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.042 10c0-4.928 4.03-8.958 8.958-8.958 4.929 0 8.959 4.03 8.959 8.958 0 4.929-4.03 8.959-8.959 8.959-4.928 0-8.958-4.03-8.958-8.959ZM10 2.292c-4.238 0-7.708 3.47-7.708 7.708 0 4.239 3.47 7.709 7.708 7.709 4.239 0 7.709-3.47 7.709-7.709 0-4.238-3.47-7.708-7.709-7.708Z",
    fill: "currentColor"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.8 7.2a.625.625 0 0 1 0 .884L8.084 12.8a.625.625 0 1 1-.884-.884L11.916 7.2a.625.625 0 0 1 .884 0Z",
    fill: "currentColor"
  })), _Path3 || (_Path3 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.2 7.2a.625.625 0 0 1 .884 0l4.716 4.716a.625.625 0 1 1-.884.884L7.2 8.084a.625.625 0 0 1 0-.884Z",
    fill: "currentColor"
  })));
};

export { SvgCloseCircle as default };
