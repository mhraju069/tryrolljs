import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgBook = function SvgBook(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.03 3.53c-.511.512-.78 1.465-.78 3.47v11a.75.75 0 0 1-1.5 0V7c0-1.995.231-3.542 1.22-4.53.988-.989 2.535-1.22 4.53-1.22h7c1.995 0 3.542.231 4.53 1.22.989.988 1.22 2.535 1.22 4.53v10.01c0 .134 0 .296-.012.463a.75.75 0 0 1-1.496-.106c.008-.11.008-.223.008-.367V7c0-2.005-.269-2.958-.78-3.47-.512-.511-1.465-.78-3.47-.78h-7c-2.005 0-2.958.269-3.47.78Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.35 15.75c-1.156 0-2.1.944-2.1 2.1v.65A2.754 2.754 0 0 0 7 21.25h10a2.754 2.754 0 0 0 2.75-2.75v-2.75H6.35Zm-3.6 2.1c0-1.984 1.616-3.6 3.6-3.6H20.5a.75.75 0 0 1 .75.75v3.5A4.254 4.254 0 0 1 17 22.75H7a4.254 4.254 0 0 1-4.25-4.25v-.65ZM7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7ZM7.25 10.5A.75.75 0 0 1 8 9.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"
  })));
};

export { SvgBook as default };
