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

var _Path, _Path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgCopy = function SvgCopy(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.772 9.773c-.537.536-.874 1.465-.874 3.126v4.2c0 1.661.337 2.59.874 3.126.536.536 1.464.874 3.126.874h4.2c1.66 0 2.59-.338 3.126-.874s.874-1.465.874-3.126v-4.2c0-1.661-.338-2.59-.874-3.126s-1.465-.874-3.126-.874h-4.2c-1.662 0-2.59.338-3.126.874ZM2.499 8.5c1.039-1.039 2.56-1.4 4.399-1.4h4.2c1.838 0 3.36.361 4.399 1.4 1.038 1.04 1.4 2.56 1.4 4.4v4.2c0 1.838-.362 3.36-1.4 4.398-1.04 1.039-2.56 1.401-4.4 1.401h-4.2c-1.838 0-3.36-.362-4.398-1.401-1.04-1.039-1.401-2.56-1.401-4.399v-4.2c0-1.839.362-3.36 1.4-4.399Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.772 3.773c-.537.536-.874 1.465-.874 3.126v.2h2.2c1.838 0 3.36.362 4.399 1.401 1.038 1.04 1.4 2.56 1.4 4.4v2.2h.2c1.662 0 2.59-.339 3.127-.875.536-.536.874-1.465.874-3.126V6.9c0-1.661-.338-2.59-.874-3.126s-1.465-.874-3.126-.874h-4.2c-1.662 0-2.59.338-3.126.874ZM8.499 2.5c1.039-1.039 2.56-1.4 4.399-1.4h4.2c1.838 0 3.36.361 4.399 1.4 1.038 1.04 1.4 2.56 1.4 4.4v4.2c0 1.838-.362 3.36-1.4 4.398-1.04 1.039-2.56 1.401-4.4 1.401h-1.1a.9.9 0 0 1-.9-.9v-3.1c0-1.661-.337-2.59-.873-3.126s-1.465-.874-3.126-.874h-3.1a.9.9 0 0 1-.9-.9V6.9c0-1.839.362-3.36 1.4-4.399Z"
  })));
};

module.exports = SvgCopy;
