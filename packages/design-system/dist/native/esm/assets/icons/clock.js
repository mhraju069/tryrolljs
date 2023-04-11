import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgClock = function SvgClock(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2.75c-5.106 0-9.25 4.144-9.25 9.25s4.144 9.25 9.25 9.25 9.25-4.144 9.25-9.25S17.106 2.75 12 2.75ZM1.25 12C1.25 6.066 6.066 1.25 12 1.25S22.75 6.066 22.75 12 17.934 22.75 12 22.75 1.25 17.934 1.25 12Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.63 6.76a.75.75 0 0 1 .75.75v4.1c0 .153.058.376.189.604.13.23.292.393.423.47l.002.002 3.1 1.85a.75.75 0 1 1-.769 1.288l-3.098-1.849c-.409-.243-.737-.624-.961-1.017-.225-.394-.386-.872-.386-1.348v-4.1a.75.75 0 0 1 .75-.75Z"
  })));
};

export { SvgClock as default };
