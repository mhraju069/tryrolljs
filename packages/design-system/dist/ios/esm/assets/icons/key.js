import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgKey = function SvgKey(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.25 4.751c-2.668-2.659-6.983-2.657-9.64 0h-.001c-1.853 1.844-2.415 4.5-1.692 6.848a.75.75 0 0 1-.187.751l-4.695 4.695a1.15 1.15 0 0 0-.219.404 1.078 1.078 0 0 0-.064.453v.006l.3 2.173c.028.176.133.384.31.562.18.18.382.28.55.304l2.186.3c.1.015.268.003.458-.058a.992.992 0 0 0 .386-.212l.008-.008 4.71-4.7a.75.75 0 0 1 .754-.185c2.332.73 4.99.162 6.846-1.685 2.656-2.657 2.656-6.991-.01-9.648ZM8.55 3.689c3.243-3.243 8.507-3.241 11.76 0 3.253 3.243 3.253 8.528.01 11.771l-.001.001a8.326 8.326 0 0 1-7.91 2.18l-4.396 4.386c-.278.285-.648.476-.995.589a2.577 2.577 0 0 1-1.137.116l-2.174-.3c-.552-.076-1.044-.365-1.408-.73-.363-.366-.648-.856-.73-1.399l-.002-.01-.3-2.175v-.003c-.056-.388.012-.797.126-1.14.115-.345.304-.706.568-.978l.008-.008L6.36 11.6c-.681-2.74.04-5.77 2.19-7.91Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.36 16.96a.75.75 0 0 1 1.06 0l2.3 2.3a.75.75 0 1 1-1.06 1.06l-2.3-2.3a.75.75 0 0 1 0-1.06ZM14.5 8.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
  })));
};

export { SvgKey as default };
