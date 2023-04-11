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

var _Circle, _Path, _Path2, _Defs;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgExpandIcon = function SvgExpandIcon(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 31 31",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Circle || (_Circle = /*#__PURE__*/React__namespace.createElement(Svg.Circle, {
    cx: 15.5,
    cy: 15.5,
    r: 15.5,
    fill: "url(#expandIcon_svg__a)"
  })), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    d: "M10.244 16.387a.5.5 0 0 1-.5-.5v-.772a.5.5 0 0 1 .5-.5h10.514a.5.5 0 0 1 .5.5v.772a.5.5 0 0 1-.5.5H10.244Z",
    fill: "#fff"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    d: "M9.994 15.887v-.772h-.5v.772h.5Zm.25-1.022h10.514v-.5H10.244v.5Zm10.764.25v.772h.5v-.772h-.5Zm-.25 1.022H10.244v.5h10.514v-.5Zm.25-.25a.25.25 0 0 1-.25.25v.5a.75.75 0 0 0 .75-.75h-.5Zm-.25-1.022a.25.25 0 0 1 .25.25h.5a.75.75 0 0 0-.75-.75v.5Zm-10.764.25a.25.25 0 0 1 .25-.25v-.5a.75.75 0 0 0-.75.75h.5Zm-.5.772c0 .414.336.75.75.75v-.5a.25.25 0 0 1-.25-.25h-.5Z",
    fill: "#fff"
  })), _Defs || (_Defs = /*#__PURE__*/React__namespace.createElement(Svg.Defs, null, /*#__PURE__*/React__namespace.createElement(Svg.LinearGradient, {
    id: "expandIcon_svg__a",
    x1: 0,
    y1: 15.5,
    x2: 31,
    y2: 15.5,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__namespace.createElement(Svg.Stop, {
    stopColor: "#0085FF"
  }), /*#__PURE__*/React__namespace.createElement(Svg.Stop, {
    offset: 1,
    stopColor: "#004EFF"
  })))));
};

module.exports = SvgExpandIcon;
