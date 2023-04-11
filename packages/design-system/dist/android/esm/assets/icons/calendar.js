import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2, _Path3;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgCalendar = function SvgCalendar(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25ZM16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM2.75 9.09a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1-.75-.75Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.737 5.385c-.64.69-.987 1.73-.987 3.115V17c0 1.385.346 2.425.987 3.115.631.68 1.656 1.135 3.263 1.135h8c1.607 0 2.631-.455 3.263-1.135.64-.69.987-1.73.987-3.115V8.5c0-1.385-.346-2.425-.987-3.115C18.63 4.705 17.607 4.25 16 4.25H8c-1.607 0-2.632.455-3.263 1.135Zm-1.1-1.02C4.633 3.295 6.108 2.75 8 2.75h8c1.893 0 3.369.545 4.362 1.615.984 1.06 1.388 2.52 1.388 4.135V17c0 1.615-.404 3.075-1.388 4.135-.993 1.07-2.469 1.615-4.362 1.615H8c-1.893 0-3.368-.545-4.362-1.615-.984-1.06-1.388-2.52-1.388-4.135V8.5c0-1.615.404-3.075 1.388-4.135Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.995 13.7a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM7.294 13.7a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-.999-1ZM7.294 16.7a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-.999-1Z"
  })));
};

export { SvgCalendar as default };
