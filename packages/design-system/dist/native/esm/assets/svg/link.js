import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgLink = function SvgLink(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 10 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    d: "M7.917 11.917H2.083V6.083H5V5.25H2.083a.833.833 0 0 0-.833.833v5.834c0 .458.37.833.833.833h5.834a.836.836 0 0 0 .833-.833V9h-.833v2.917ZM5.833 5.25v.833H7.33L3.233 10.18l.588.588L7.917 6.67v1.496h.833V5.25H5.833Z",
    fill: "#004EFF"
  })));
};

export { SvgLink as default };
