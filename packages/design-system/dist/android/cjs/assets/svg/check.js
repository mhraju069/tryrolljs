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

var _Circle, _Circle2, _Path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Circle || (_Circle = /*#__PURE__*/React__namespace.createElement(Svg.Circle, {
    cx: 12,
    cy: 12,
    r: 11.5,
    fill: "#fff",
    stroke: "#CCC"
  })), _Circle2 || (_Circle2 = /*#__PURE__*/React__namespace.createElement(Svg.Circle, {
    cx: 12,
    cy: 12,
    r: 12,
    fill: "green"
  })), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    d: "m9.45 15.42-3.32-3.318L5 13.224l4.45 4.45L19 8.121 17.878 7l-8.429 8.42Z",
    fill: "#fff"
  })));
};

module.exports = SvgCheck;
