import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

var _Circle, _Circle2, _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Circle || (_Circle = /*#__PURE__*/React.createElement(Circle, {
    cx: 12,
    cy: 12,
    r: 11.5,
    fill: "#fff",
    stroke: "#CCC"
  })), _Circle2 || (_Circle2 = /*#__PURE__*/React.createElement(Circle, {
    cx: 12,
    cy: 12,
    r: 12,
    fill: "green"
  })), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    d: "m9.45 15.42-3.32-3.318L5 13.224l4.45 4.45L19 8.121 17.878 7l-8.429 8.42Z",
    fill: "#fff"
  })));
};

export { SvgCheck as default };
