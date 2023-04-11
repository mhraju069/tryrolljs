import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgGallery = function SvgGallery(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905Zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 6.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM6.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM19.881 13.069c-.499-.429-1.343-.429-1.842 0l-4.16 3.57c-1.061.911-2.737.911-3.798 0l-.006-.006-.327-.287c-.448-.382-1.214-.43-1.73-.083l-4.93 3.31a.75.75 0 1 1-.836-1.246l4.93-3.31c1.063-.713 2.575-.641 3.547.194l.006.005.327.287c.499.427 1.341.426 1.84-.002l4.16-3.57c1.06-.911 2.736-.911 3.797 0l1.63 1.4a.75.75 0 0 1-.978 1.138l-1.63-1.4Z"
  })));
};

export { SvgGallery as default };
