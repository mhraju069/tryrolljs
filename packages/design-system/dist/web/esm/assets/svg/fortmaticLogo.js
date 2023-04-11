import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgFortmaticLogo = function SvgFortmaticLogo(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.201 4h8.201v4.206H8.102V20.799H4V4h8.201Zm4.101 12.594h-4.076v-4.181H20.4v4.328a4.112 4.112 0 0 1-1.159 2.87 3.908 3.908 0 0 1-2.796 1.189h-.144v-4.206Z",
    fill: "#6851FF"
  })));
};

export { SvgFortmaticLogo as default };
