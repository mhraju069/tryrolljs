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
var SvgExport = function SvgExport(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.88 3.19a.75.75 0 0 1 .53.22l2.56 2.56a.75.75 0 0 1-1.06 1.06L11.88 5 9.85 7.03a.75.75 0 0 1-1.06-1.06l2.56-2.56a.75.75 0 0 1 .53-.22Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.88 3.26a.75.75 0 0 1 .75.75v10.17a.75.75 0 0 1-1.5 0V4.01a.75.75 0 0 1 .75-.75Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 11.25a.75.75 0 0 1 .75.75c0 2.04.691 3.849 1.919 5.141C7.89 18.427 9.689 19.25 12 19.25c2.312 0 4.11-.823 5.331-2.109 1.228-1.292 1.919-3.1 1.919-5.141a.75.75 0 0 1 1.5 0c0 2.38-.809 4.571-2.331 6.174-1.528 1.609-3.73 2.576-6.419 2.576-2.688 0-4.89-.967-6.419-2.576C4.06 16.571 3.25 14.379 3.25 12a.75.75 0 0 1 .75-.75Z"
  })));
};

module.exports = SvgExport;
