import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

var _G, _Defs;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgLock = function SvgLock(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _G || (_G = /*#__PURE__*/React.createElement(G, {
    clipPath: "url(#lock_svg__a)",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M8.408 5.494c-.594.737-.803 1.81-.803 3.157v1.675a.628.628 0 1 1-1.256 0V8.65c0-1.423.209-2.862 1.08-3.945C8.326 3.595 9.8 3 12 3c2.2 0 3.675.595 4.57 1.706.872 1.083 1.081 2.522 1.081 3.945v1.675a.628.628 0 0 1-1.256 0V8.65c0-1.348-.21-2.42-.803-3.157-.57-.707-1.606-1.238-3.592-1.238s-3.023.53-3.592 1.238ZM12 13.884a1.465 1.465 0 1 0 0 2.93 1.465 1.465 0 0 0 0-2.93Zm-2.72 1.465a2.72 2.72 0 1 1 5.441 0 2.72 2.72 0 0 1-5.442 0Z"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.91 11.607c-.43.428-.654 1.226-.654 2.905v1.674c0 1.679.225 2.477.653 2.905.428.428 1.226.653 2.905.653h8.372c1.679 0 2.477-.225 2.905-.653.428-.428.653-1.226.653-2.905v-1.674c0-1.68-.225-2.477-.653-2.905-.428-.428-1.226-.653-2.905-.653H7.814c-1.679 0-2.477.225-2.905.653Zm-.889-.888c.828-.828 2.123-1.021 3.793-1.021h8.372c1.67 0 2.965.193 3.793 1.02.828.828 1.021 2.124 1.021 3.794v1.674c0 1.67-.194 2.965-1.021 3.793-.828.828-2.123 1.021-3.793 1.021H7.814c-1.67 0-2.965-.194-3.793-1.021C3.194 19.15 3 17.856 3 16.186v-1.674c0-1.67.194-2.966 1.021-3.793Z"
  }))), _Defs || (_Defs = /*#__PURE__*/React.createElement(Defs, null, /*#__PURE__*/React.createElement(ClipPath, {
    id: "lock_svg__a"
  }, /*#__PURE__*/React.createElement(Path, {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  })))));
};

export { SvgLock as default };
