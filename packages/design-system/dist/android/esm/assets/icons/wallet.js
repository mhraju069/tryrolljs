import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgWallet = function SvgWallet(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 7.75c-.244 0-.476.017-.696.051l-.02.003c-1.108.14-1.978.613-2.574 1.313-.598.7-.96 1.676-.96 2.883v5c0 1.33.44 2.38 1.155 3.095C4.621 20.81 5.67 21.25 7 21.25h10c1.33 0 2.38-.44 3.095-1.155.715-.716 1.155-1.765 1.155-3.095v-5c0-1.215-.368-2.197-.975-2.9-.606-.702-1.49-1.175-2.612-1.305A3.849 3.849 0 0 0 17 7.75H7Zm-.914-1.433c.297-.045.602-.067.914-.067h10c.27 0 .56.01.855.057 1.45.173 2.684.804 3.555 1.813.873 1.012 1.34 2.355 1.34 3.88v5c0 1.67-.56 3.12-1.595 4.155C20.121 22.19 18.67 22.75 17 22.75H7c-1.67 0-3.12-.56-4.155-1.595C1.81 20.121 1.25 18.67 1.25 17v-5c0-1.513.458-2.848 1.318-3.857.86-1.008 2.08-1.643 3.518-1.826Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.551 3.551 7.861 6.25h8.962a2.677 2.677 0 0 0-.618-.925l-.007-.008-1.747-1.767a2.775 2.775 0 0 0-3.9.001ZM6.241 5.75l3.252-3.262a4.275 4.275 0 0 1 6.017 0l.005.005 1.746 1.766a4.123 4.123 0 0 1 1.24 2.755.75.75 0 0 1-.873.776c-.18-.03-.382-.04-.627-.04h-10c-.244 0-.476.017-.696.051a.75.75 0 0 1-.784-1.076c.184-.369.438-.693.72-.975ZM16.25 14.5A2.756 2.756 0 0 1 19 11.75h3a.75.75 0 0 1 0 1.5h-3c-.686 0-1.25.564-1.25 1.25s.564 1.25 1.25 1.25h3a.75.75 0 0 1 0 1.5h-3a2.756 2.756 0 0 1-2.75-2.75Z"
  })));
};

export { SvgWallet as default };
