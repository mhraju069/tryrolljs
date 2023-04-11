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

var _Path, _Path2, _Path3;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgLayer = function SvgLayer(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.79 3.445c-.372 0-.703.065-.914.16h-.002L4.972 6.226c-.774.342-.827.651-.827.684 0 .033.053.342.827.684h.002l5.902 2.621c.211.095.542.16.914.16s.702-.065.913-.16h.002l5.9-2.62.002-.001c.774-.342.828-.651.828-.684 0-.033-.053-.342-.828-.684l-5.902-2.62-.002-.002c-.211-.094-.541-.16-.913-.16Zm1.525-1.21c-.459-.205-1.013-.29-1.525-.29-.513 0-1.067.085-1.526.29h-.001L4.367 4.854c-.925.408-1.722 1.094-1.722 2.056s.796 1.647 1.72 2.056c0 0 .001 0 0 0l5.898 2.618h.001c.46.206 1.013.29 1.526.29.512 0 1.066-.084 1.525-.29h.001l5.896-2.618c.925-.408 1.723-1.094 1.723-2.056s-.797-1.648-1.722-2.056l-5.897-2.619h-.001Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 10.25a.75.75 0 0 1 .75.75c0 .243.096.556.29.854.194.297.44.512.663.61h.002l6.788 3.02a1.24 1.24 0 0 0 1.009.002l.003-.001 6.79-3.02.002-.001c.223-.098.47-.313.663-.61.194-.298.29-.61.29-.854a.75.75 0 0 1 1.5 0c0 .597-.219 1.19-.533 1.671-.313.483-.766.923-1.313 1.165l-6.786 3.018h-.002a2.738 2.738 0 0 1-2.23.002l-6.789-3.02h-.001c-.547-.242-1-.682-1.313-1.165-.314-.482-.533-1.074-.533-1.671a.75.75 0 0 1 .75-.75Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 15.25a.75.75 0 0 1 .75.75c0 .63.373 1.204.956 1.465l6.787 3.02s0-.001 0 0a1.24 1.24 0 0 0 1.009.001l.003-.001 6.789-3.02c.582-.26.956-.834.956-1.465a.75.75 0 0 1 1.5 0 3.107 3.107 0 0 1-1.844 2.835h-.001l-6.787 3.019h-.002a2.738 2.738 0 0 1-2.23.002l-6.792-3.021A3.107 3.107 0 0 1 2.25 16a.75.75 0 0 1 .75-.75Z"
  })));
};

module.exports = SvgLayer;
