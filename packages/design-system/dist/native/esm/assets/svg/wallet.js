import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgWallet = function SvgWallet(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 10 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    d: "M8.75 11.5v.417a.836.836 0 0 1-.833.833H2.083a.833.833 0 0 1-.833-.833V6.083c0-.458.37-.833.833-.833h5.834c.458 0 .833.375.833.833V6.5H5a.833.833 0 0 0-.833.833v3.334c0 .458.37.833.833.833h3.75ZM5 10.667h4.167V7.333H5v3.334Zm1.667-1.042a.624.624 0 1 1-.002-1.248.624.624 0 0 1 .002 1.248Z",
    fill: "#004EFF"
  })));
};

export { SvgWallet as default };
