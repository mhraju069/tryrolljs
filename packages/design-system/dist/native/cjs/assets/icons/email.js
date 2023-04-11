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
var SvgEmail = function SvgEmail(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.985 5.346c-.64.595-1.087 1.575-1.087 3.153v7c0 1.579.446 2.558 1.087 3.153.653.607 1.65.947 3.013.947h10c1.362 0 2.36-.34 3.012-.947.641-.595 1.088-1.574 1.088-3.153v-7c0-1.578-.447-2.558-1.088-3.153-.653-.606-1.65-.947-3.012-.947h-10c-1.362 0-2.36.34-3.013.947ZM2.76 4.027C3.857 3.008 5.36 2.6 6.998 2.6h10c1.638 0 3.14.41 4.237 1.428 1.11 1.03 1.663 2.55 1.663 4.472v7c0 1.922-.554 3.442-1.663 4.472-1.097 1.019-2.6 1.428-4.237 1.428h-10c-1.638 0-3.14-.41-4.238-1.428-1.109-1.03-1.662-2.55-1.662-4.472v-7c0-1.921.553-3.442 1.662-4.472Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.705 8.438a.9.9 0 0 1-.142 1.265l-3.13 2.501c-1.359 1.081-3.514 1.081-4.872 0l-.002-.002-3.12-2.5a.9.9 0 1 1 1.125-1.404l3.118 2.498h.001c.702.559 1.926.559 2.627 0l3.13-2.5a.9.9 0 0 1 1.265.142Z"
  })));
};

module.exports = SvgEmail;
