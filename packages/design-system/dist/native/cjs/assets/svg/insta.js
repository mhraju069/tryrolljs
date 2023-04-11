'use strict';

var React = require('react');
var Svg = require('react-native-svg');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n["default"] = e;
	return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Svg__default = /*#__PURE__*/_interopDefaultLegacy(Svg);

var _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgInsta = function SvgInsta(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.845 12.016h8.124V24.59c0 .982-.246 1.888-.739 2.72a5.41 5.41 0 0 1-1.99 1.968c-.836.48-1.745.72-2.73.72H7.49a5.066 5.066 0 0 1-2.73-.704 5.665 5.665 0 0 1-2.006-1.984A5.16 5.16 0 0 1 2 24.591V12.048h8.124c-1.37 2.069-1.67 4.223-.899 6.464.535 1.514 1.488 2.709 2.858 3.584.899.597 1.868.965 2.906 1.103a7.273 7.273 0 0 0 3.066-.24 7.022 7.022 0 0 0 2.698-1.503 6.79 6.79 0 0 0 1.798-2.56 7.185 7.185 0 0 0 .546-3.328c-.107-1.238-.524-2.422-1.252-3.552ZM5.468 8.912V2.864c0-.235.021-.379.064-.432.043-.053.193-.123.45-.208l.289-.064v6.752h1.156v-6.88h.738v6.88h1.156V2H24.51c.963 0 1.857.24 2.681.72a5.663 5.663 0 0 1 1.991 1.936c.503.81.765 1.685.787 2.624A48.9 48.9 0 0 1 30 9.2c-.021 1.579-.032 2.23-.032 1.952h-8.606a.554.554 0 0 1-.45-.192c-.942-.854-2.001-1.43-3.179-1.728a6.954 6.954 0 0 0-3.532.016 7.534 7.534 0 0 0-3.179 1.744c-.107.106-.214.16-.32.16h-8.51l-.16-.032V9.904C2.01 10.16 2 9.669 2 8.432c0-.576.021-1.067.064-1.472.107-1.557.824-2.848 2.152-3.872l.128-.032v5.856h1.124Zm21.964-.704V5.232c0-.277-.08-.496-.24-.656a.849.849 0 0 0-.627-.24 69.689 69.689 0 0 0-2.986 0c-.278 0-.492.086-.642.256-.15.171-.225.395-.225.672v2.944c0 .278.08.496.24.656.161.16.37.24.627.24h2.954c.278 0 .498-.08.658-.24.161-.16.241-.378.241-.656ZM16.001 21.616a5.618 5.618 0 0 1-2.794-.72 5.306 5.306 0 0 1-2.023-1.983 5.359 5.359 0 0 1-.739-2.753c0-.992.246-1.909.739-2.751a5.545 5.545 0 0 1 2.023-2.016 5.403 5.403 0 0 1 2.777-.752c.996 0 1.916.25 2.762.752a5.584 5.584 0 0 1 2.007 2.016 5.36 5.36 0 0 1 .738 2.751 5.36 5.36 0 0 1-.738 2.753 5.34 5.34 0 0 1-2.007 1.983c-.846.48-1.76.72-2.745.72Zm4.045-5.47c0-.725-.182-1.403-.546-2.032a4.028 4.028 0 0 0-3.516-2.032 4.065 4.065 0 0 0-3.516 2.016 3.935 3.935 0 0 0-.546 2.032c0 .736.182 1.413.546 2.032a4.192 4.192 0 0 0 1.477 1.488c.62.373 1.3.56 2.039.56a4.065 4.065 0 0 0 3.516-2.016 3.965 3.965 0 0 0 .546-2.048Z",
    fill: "#fff"
  })));
};

module.exports = SvgInsta;
