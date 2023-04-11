import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2, _Path3;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgCoin = function SvgCoin(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.5 11.9a.75.75 0 0 1 .75.75c0 2.562 2.415 4.6 5.75 4.6s5.75-2.038 5.75-4.6a.75.75 0 0 1 1.5 0v3.7c0 3.63-3.348 6.4-7.25 6.4s-7.25-2.77-7.25-6.4v-3.7a.75.75 0 0 1 .75-.75Zm.751 4.547c.06 2.57 2.512 4.803 5.749 4.803 3.237 0 5.688-2.233 5.749-4.803-1.353 1.455-3.474 2.303-5.749 2.303-2.275 0-4.396-.848-5.749-2.303Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2.75c-1.625 0-3.068.568-4.107 1.475-1.03.897-1.643 2.11-1.643 3.425 0 .77.21 1.474.58 2.079v.001c.907 1.49 2.833 2.52 5.17 2.52 2.337 0 4.263-1.03 5.17-2.52V9.73c.37-.604.58-1.31.58-2.079 0-1.314-.613-2.527-1.643-3.435C15.067 3.318 13.624 2.75 12 2.75Zm-5.093.345C8.23 1.94 10.025 1.25 12 1.25s3.77.691 5.09 1.833l.006.004c1.308 1.151 2.154 2.758 2.154 4.563 0 1.05-.29 2.025-.8 2.86-1.234 2.03-3.707 3.24-6.45 3.24-2.743 0-5.216-1.21-6.45-3.24-.51-.835-.8-1.81-.8-2.86 0-1.805.846-3.412 2.157-4.555"
  })), _Path3 || (_Path3 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2.75c-3.278 0-5.75 2.29-5.75 4.9v5c0 2.563 2.415 4.6 5.75 4.6s5.75-2.037 5.75-4.6v-5c0-1.314-.613-2.527-1.643-3.435C15.067 3.318 13.624 2.75 12 2.75Zm-7.25 4.9c0-3.63 3.348-6.4 7.25-6.4 1.975 0 3.77.691 5.09 1.833l.006.004c1.308 1.151 2.154 2.758 2.154 4.563v5c0 3.678-3.405 6.1-7.25 6.1s-7.25-2.422-7.25-6.1v-5Z"
  })));
};

export { SvgCoin as default };
