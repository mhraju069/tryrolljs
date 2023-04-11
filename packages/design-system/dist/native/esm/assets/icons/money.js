import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgMoney = function SvgMoney(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.883 5.238c-.68.631-1.135 1.656-1.135 3.263v7c0 1.607.455 2.632 1.135 3.263.69.64 1.73.987 3.115.987h10c1.385 0 2.425-.346 3.115-.987.68-.631 1.135-1.656 1.135-3.263v-7c0-1.607-.455-2.632-1.135-3.263-.69-.64-1.73-.987-3.115-.987h-10c-1.385 0-2.425.346-3.115.987Zm-1.02-1.1c1.06-.983 2.52-1.387 4.135-1.387h10c1.615 0 3.075.404 4.135 1.388 1.07.994 1.615 2.469 1.615 4.362v7c0 1.893-.545 3.368-1.615 4.362-1.06.984-2.52 1.388-4.135 1.388h-10c-1.615 0-3.075-.404-4.135-1.388-1.07-.994-1.615-2.47-1.615-4.362v-7c0-1.893.545-3.368 1.615-4.362Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM5.502 8.751a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM18.498 8.751a.75.75 0 0 1 .75.75v5a.75.75 0 1 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z"
  })));
};

export { SvgMoney as default };
