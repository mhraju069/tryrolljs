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
var SvgLogout = function SvgLogout(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.075 4.258c-.79.641-1.282 1.679-1.427 3.367a.75.75 0 1 1-1.495-.13c.165-1.911.753-3.409 1.977-4.402 1.204-.977 2.887-1.353 4.98-1.353h.13c2.31 0 4.121.458 5.337 1.674C21.793 4.629 22.25 6.44 22.25 8.75v6.52c0 2.31-.457 4.121-1.673 5.337-1.216 1.215-3.027 1.673-5.337 1.673h-.13c-2.078 0-3.75-.37-4.952-1.332-1.223-.978-1.819-2.454-1.994-4.338a.75.75 0 1 1 1.493-.14c.155 1.656.649 2.676 1.438 3.307.811.649 2.074 1.003 4.015 1.003h.13c2.161 0 3.48-.437 4.276-1.234.797-.797 1.234-2.115 1.234-4.276V8.75c0-2.16-.437-3.479-1.234-4.276-.796-.797-2.115-1.234-4.276-1.234h-.13c-1.956 0-3.223.36-4.034 1.018Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.87 12a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5H3.62a.75.75 0 0 1-.75-.75Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.38 8.12a.75.75 0 0 1 0 1.06L3.56 12l2.82 2.82a.75.75 0 1 1-1.06 1.06l-3.35-3.35a.75.75 0 0 1 0-1.06l3.35-3.35a.75.75 0 0 1 1.06 0Z"
  })));
};

module.exports = SvgLogout;
