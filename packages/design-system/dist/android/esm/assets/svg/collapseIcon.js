import * as React from 'react';
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

var _Circle, _Path, _Path2, _Defs;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgCollapseIcon = function SvgCollapseIcon(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 31 31",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Circle || (_Circle = /*#__PURE__*/React.createElement(Circle, {
    cx: 15.5,
    cy: 15.5,
    r: 15.5,
    fill: "url(#collapseIcon_svg__a)"
  })), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.116 9.742a.5.5 0 0 0-.5.5v4.373h-4.372a.5.5 0 0 0-.5.5v.772a.5.5 0 0 0 .5.5h4.372v4.37a.5.5 0 0 0 .5.5h.772a.5.5 0 0 0 .5-.5v-4.37h4.37a.5.5 0 0 0 .5-.5v-.772a.5.5 0 0 0-.5-.5h-4.37v-4.373a.5.5 0 0 0-.5-.5h-.772Z",
    fill: "#fff"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    d: "M14.616 14.615v.25h.25v-.25h-.25Zm0 1.772h.25v-.25h-.25v.25Zm1.772 0v-.25h-.25v.25h.25Zm0-1.772h-.25v.25h.25v-.25Zm-1.522-4.373a.25.25 0 0 1 .25-.25v-.5a.75.75 0 0 0-.75.75h.5Zm0 4.373v-4.373h-.5v4.373h.5Zm-4.622.25h4.372v-.5h-4.372v.5Zm-.25.25a.25.25 0 0 1 .25-.25v-.5a.75.75 0 0 0-.75.75h.5Zm0 .772v-.772h-.5v.772h.5Zm.25.25a.25.25 0 0 1-.25-.25h-.5c0 .414.336.75.75.75v-.5Zm4.372 0h-4.372v.5h4.372v-.5Zm.25 4.62v-4.37h-.5v4.37h.5Zm.25.25a.25.25 0 0 1-.25-.25h-.5c0 .414.336.75.75.75v-.5Zm.772 0h-.772v.5h.772v-.5Zm.25-.25a.25.25 0 0 1-.25.25v.5a.75.75 0 0 0 .75-.75h-.5Zm0-4.37v4.37h.5v-4.37h-.5Zm4.62-.25h-4.37v.5h4.37v-.5Zm.25-.25a.25.25 0 0 1-.25.25v.5a.75.75 0 0 0 .75-.75h-.5Zm0-.772v.772h.5v-.772h-.5Zm-.25-.25a.25.25 0 0 1 .25.25h.5a.75.75 0 0 0-.75-.75v.5Zm-4.37 0h4.37v-.5h-4.37v.5Zm-.25-4.623v4.373h.5v-4.373h-.5Zm-.25-.25a.25.25 0 0 1 .25.25h.5a.75.75 0 0 0-.75-.75v.5Zm-.772 0h.772v-.5h-.772v.5Z",
    fill: "#fff"
  })), _Defs || (_Defs = /*#__PURE__*/React.createElement(Defs, null, /*#__PURE__*/React.createElement(LinearGradient, {
    id: "collapseIcon_svg__a",
    x1: 0,
    y1: 15.5,
    x2: 31,
    y2: 15.5,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement(Stop, {
    stopColor: "#0085FF"
  }), /*#__PURE__*/React.createElement(Stop, {
    offset: 1,
    stopColor: "#004EFF"
  })))));
};

export { SvgCollapseIcon as default };
