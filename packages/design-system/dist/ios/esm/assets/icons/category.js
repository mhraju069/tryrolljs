import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgCategory = function SvgCategory(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.22 2.22c.69-.69 1.664-.97 2.78-.97h2c1.116 0 2.09.28 2.78.97s.97 1.664.97 2.78v2c0 1.116-.28 2.09-.97 2.78s-1.664.97-2.78.97h-2c-1.116 0-2.09-.28-2.78-.97s-.97-1.664-.97-2.78V5c0-1.116.28-2.09.97-2.78Zm1.06 1.06c-.31.31-.53.836-.53 1.72v2c0 .884.22 1.41.53 1.72.31.31.836.53 1.72.53h2c.884 0 1.41-.22 1.72-.53.31-.31.53-.836.53-1.72V5c0-.884-.22-1.41-.53-1.72-.31-.31-.836-.53-1.72-.53h-2c-.884 0-1.41.22-1.72.53ZM2.22 14.22c.69-.69 1.664-.97 2.78-.97h2c1.116 0 2.09.28 2.78.97s.97 1.664.97 2.78v2c0 1.116-.28 2.09-.97 2.78s-1.664.97-2.78.97H5c-1.116 0-2.09-.28-2.78-.97s-.97-1.664-.97-2.78v-2c0-1.116.28-2.09.97-2.78Zm1.06 1.06c-.31.31-.53.836-.53 1.72v2c0 .884.22 1.41.53 1.72.31.31.836.53 1.72.53h2c.884 0 1.41-.22 1.72-.53.31-.31.53-.836.53-1.72v-2c0-.884-.22-1.41-.53-1.72-.31-.31-.836-.53-1.72-.53H5c-.884 0-1.41.22-1.72.53ZM6 2.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM1.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM18 14.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM13.25 18a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Z"
  })));
};

export { SvgCategory as default };
