import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

var _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgDiscord = function SvgDiscord(props) {
  return /*#__PURE__*/React.createElement(Svg, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.253 0H26.52c1.793 0 3.253 1.472 3.253 3.296V32l-3.412-3.04-1.92-1.792-2.032-1.904.841 2.96H5.253C3.46 28.224 2 26.752 2 24.928V3.296C2 1.472 3.46 0 5.253 0Zm14.094 19.601a68.756 68.756 0 0 0 1.047 1.296c3.508-.112 4.857-2.432 4.857-2.432 0-5.152-2.286-9.328-2.286-9.328-2.285-1.728-4.46-1.68-4.46-1.68l-.222.256c2.698.832 3.952 2.032 3.952 2.032a12.863 12.863 0 0 0-4.777-1.536 13.321 13.321 0 0 0-3.206.032c-.083 0-.154.012-.234.026l-.036.006c-.555.048-1.904.256-3.602 1.008-.587.272-.936.464-.936.464s1.317-1.264 4.173-2.096l-.158-.192s-2.174-.048-4.46 1.68c0 0-2.285 4.176-2.285 9.328 0 0 1.333 2.32 4.84 2.432 0 0 .588-.72 1.064-1.328-2.016-.608-2.778-1.888-2.778-1.888s.16.112.445.272a.22.22 0 0 0 .063.048c.024.016.048.028.072.04.023.012.047.024.071.04.397.224.794.4 1.159.544.65.256 1.428.512 2.332.688a11.03 11.03 0 0 0 4.111.016 10.382 10.382 0 0 0 2.301-.688 9.054 9.054 0 0 0 1.825-.944s-.793 1.312-2.872 1.904Zm-6.333-6.175c-.904 0-1.618.8-1.618 1.776s.73 1.776 1.618 1.776c.905 0 1.62-.8 1.62-1.776.015-.976-.715-1.776-1.62-1.776Zm4.175 1.776c0-.976.714-1.776 1.618-1.776.905 0 1.619.8 1.619 1.776s-.714 1.776-1.619 1.776c-.888 0-1.618-.8-1.618-1.776Z",
    fill: "#fff"
  })));
};

export { SvgDiscord as default };
