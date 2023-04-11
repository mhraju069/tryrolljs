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
var SvgTask = function SvgTask(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.25 19.5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75ZM10.25 12.5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75ZM10.25 5.5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.75-.75ZM7.53 2.97a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47 2.47-2.47a.75.75 0 0 1 1.06 0ZM7.53 9.97a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 2.47-2.47a.75.75 0 0 1 1.06 0ZM7.53 16.97a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 2.47-2.47a.75.75 0 0 1 1.06 0Z"
  })));
};

module.exports = SvgTask;
