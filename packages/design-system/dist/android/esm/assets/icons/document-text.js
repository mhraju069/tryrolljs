import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgDocumentText = function SvgDocumentText(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.737 3.885c-.64.69-.987 1.73-.987 3.115v10c0 1.385.346 2.425.987 3.115.631.68 1.656 1.135 3.263 1.135h8c1.607 0 2.631-.455 3.263-1.135.64-.69.987-1.73.987-3.115V7c0-1.385-.346-2.425-.987-3.115C18.63 3.205 17.607 2.75 16 2.75H8c-1.607 0-2.632.455-3.263 1.135Zm-1.1-1.02C4.633 1.795 6.108 1.25 8 1.25h8c1.893 0 3.369.545 4.362 1.615.984 1.06 1.388 2.52 1.388 4.135v10c0 1.615-.404 3.075-1.388 4.135-.993 1.07-2.469 1.615-4.362 1.615H8c-1.893 0-3.368-.545-4.362-1.615-.984-1.06-1.388-2.52-1.388-4.135V7c0-1.615.404-3.075 1.388-4.135Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.5 3.75a.75.75 0 0 1 .75.75v2c0 .686.564 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5h-2a2.756 2.756 0 0 1-2.75-2.75v-2a.75.75 0 0 1 .75-.75ZM7.25 13a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM7.25 17a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"
  })));
};

export { SvgDocumentText as default };
