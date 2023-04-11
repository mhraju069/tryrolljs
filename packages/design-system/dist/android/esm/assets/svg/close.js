import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgClose = function SvgClose(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    d: "m15.833 5.343-1.175-1.175L10 8.826 5.34 4.168 4.167 5.343l4.659 4.658-4.658 4.659 1.175 1.175L10 11.176l4.658 4.659 1.175-1.175L11.175 10l4.658-4.658Z",
    fill: "#7C7C7C"
  })));
};

export { SvgClose as default };
