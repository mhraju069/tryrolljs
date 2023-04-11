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
var SvgWarning = function SvgWarning(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 7a.75.75 0 0 1 .75.75V13a.75.75 0 0 1-1.5 0V7.75A.75.75 0 0 1 12 7Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.197 3.07a2.413 2.413 0 0 0-2.402 0L4.858 6.498A2.424 2.424 0 0 0 3.66 8.58v6.84a2.4 2.4 0 0 0 1.195 2.08l5.937 3.429h.002c.75.429 1.665.427 2.401.002l5.935-3.428h.003a2.424 2.424 0 0 0 1.197-2.083V8.58c0-.859-.454-1.644-1.197-2.082l-.003-.001-5.932-3.426h-.001Zm-3.152-1.3a3.913 3.913 0 0 1 3.897-.001l.003.002 5.945 3.432a3.912 3.912 0 0 1 1.94 3.377v6.84a3.924 3.924 0 0 1-1.94 3.377l-.005.003-5.94 3.43a3.913 3.913 0 0 1-3.897.001l-.003-.002-5.94-3.43A3.9 3.9 0 0 1 2.16 15.42V8.58c0-1.389.743-2.673 1.94-3.377l.005-.003 5.94-3.43Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 15.2a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1Z"
  })));
};

module.exports = SvgWarning;
