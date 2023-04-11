import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgClipboardText = function SvgClipboardText(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.25 12.2a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM7.25 16.2a.75.75 0 0 1 .75-.75h4.38a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM9.929 1.25H14.07c.443-.002 1.151-.004 1.72.376.684.456.959 1.275.959 2.374v.071c.001.443.003 1.15-.376 1.72-.456.684-1.275.959-2.374.959H9.929c-.443.001-1.151.003-1.72-.376C7.525 5.918 7.25 5.099 7.25 4c0-1.1.275-1.918.959-2.374.569-.38 1.277-.378 1.72-.376ZM9.04 2.874c-.066.044-.291.225-.291 1.126 0 .9.225 1.082.291 1.126.15.1.394.124.959.124h4c.901 0 1.082-.226 1.126-.291.1-.15.124-.394.124-.96 0-.9-.225-1.081-.291-1.125-.15-.1-.394-.124-.959-.124h-4c-.565 0-.81.024-.959.124Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.749 3.98a.75.75 0 0 1-.709.789c-1.606.087-2.607.424-3.238 1.107C4.162 6.57 3.75 7.781 3.75 10v6c0 1.987.261 3.231.94 4.006.656.75 1.875 1.244 4.31 1.244h6c2.435 0 3.654-.494 4.31-1.244.679-.775.94-2.02.94-4.006v-6c0-2.225-.413-3.436-1.052-4.127-.63-.682-1.631-1.017-3.239-1.104a.75.75 0 1 1 .082-1.498c1.722.093 3.222.463 4.258 1.583 1.029 1.112 1.451 2.8 1.451 5.146v6c0 2.013-.239 3.769-1.31 4.994-1.094 1.25-2.875 1.756-5.44 1.756H9c-2.565 0-4.346-.506-5.44-1.756C2.49 19.769 2.25 18.014 2.25 16v-6c0-2.34.422-4.029 1.45-5.141C4.737 3.737 6.236 3.364 7.96 3.27a.75.75 0 0 1 .789.709Z"
  })));
};

export { SvgClipboardText as default };
