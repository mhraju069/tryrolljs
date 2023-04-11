import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgExternal = function SvgExternal(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.763 3.237a.81.81 0 0 1 0 1.146l-7.38 7.38a.81.81 0 0 1-1.146-1.146l7.38-7.38a.81.81 0 0 1 1.146 0Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 2.818c0-.452.366-.818.818-.818h4.364c.452 0 .818.366.818.818v4.364a.818.818 0 1 1-1.636 0V3.636h-3.546A.818.818 0 0 1 16 2.818ZM3.733 3.733C4.995 2.47 6.873 2 9.248 2h1.835a.826.826 0 0 1 0 1.651H9.248c-2.212 0-3.546.448-4.348 1.25-.801.8-1.249 2.135-1.249 4.347v5.504c0 2.212.448 3.546 1.25 4.348.8.801 2.135 1.249 4.347 1.249h5.504c2.212 0 3.546-.448 4.348-1.25.801-.8 1.249-2.135 1.249-4.347v-1.835a.826.826 0 0 1 1.651 0v1.835c0 2.375-.47 4.253-1.733 5.515C19.005 21.53 17.127 22 14.752 22H9.248c-2.375 0-4.253-.47-5.515-1.733C2.47 19.005 2 17.127 2 14.752V9.248c0-2.375.47-4.253 1.733-5.515Z"
  })));
};

export { SvgExternal as default };
