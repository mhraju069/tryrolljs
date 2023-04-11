import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgNotification = function SvgNotification(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.27 8.91a6.755 6.755 0 0 1 6.75-6.75c3.714 0 6.75 3.036 6.75 6.75v2.89c0 .215.048.53.14.865.091.333.21.628.316.815l1.147 1.904c.905 1.51.181 3.476-1.487 4.028a21.672 21.672 0 0 1-13.744 0l-.003-.001c-.842-.286-1.474-.875-1.756-1.638-.283-.764-.187-1.623.274-2.39l1.149-1.907v-.001c.11-.184.23-.478.322-.812.093-.334.142-.648.142-.863V8.91Zm6.75-5.25a5.255 5.255 0 0 0-5.25 5.25v2.89c0 .395-.082.851-.196 1.264-.115.414-.28.844-.48 1.18l-.002.003-1.15 1.91c-.248.413-.262.799-.153 1.095.11.297.373.582.83.737a20.171 20.171 0 0 0 12.793 0h.002a1.252 1.252 0 0 0 .673-1.832l-1.157-1.922a5.186 5.186 0 0 1-.466-1.173 5.005 5.005 0 0 1-.194-1.262V8.91c0-2.886-2.364-5.25-5.25-5.25Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.472 2.926A2.735 2.735 0 0 1 12.02 1.19c1.157 0 2.149.717 2.548 1.736a.75.75 0 0 1-.907.994 5.307 5.307 0 0 0-.841-.176h-.003a6.004 6.004 0 0 0-2.438.176.75.75 0 0 1-.907-.994ZM9.77 19.06c0 .613.254 1.184.66 1.59.405.405.977.66 1.59.66a2.259 2.259 0 0 0 2.25-2.25h1.5a3.759 3.759 0 0 1-3.75 3.75 3.76 3.76 0 0 1-2.65-1.1 3.76 3.76 0 0 1-1.1-2.65h1.5Z"
  })));
};

export { SvgNotification as default };
