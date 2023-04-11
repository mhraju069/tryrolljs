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
var SvgCloseCircle = function SvgCloseCircle(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.25 12C1.25 6.086 6.086 1.25 12 1.25S22.75 6.086 22.75 12 17.914 22.75 12 22.75 1.25 17.914 1.25 12ZM12 2.75c-5.086 0-9.25 4.164-9.25 9.25s4.164 9.25 9.25 9.25 9.25-4.164 9.25-9.25S17.086 2.75 12 2.75Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.36 8.64a.75.75 0 0 1 0 1.06L9.7 15.36a.75.75 0 0 1-1.06-1.06l5.66-5.66a.75.75 0 0 1 1.06 0Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.64 8.64a.75.75 0 0 1 1.06 0l5.66 5.66a.75.75 0 0 1-1.06 1.06L8.64 9.7a.75.75 0 0 1 0-1.06Z"
  })));
};

module.exports = SvgCloseCircle;
