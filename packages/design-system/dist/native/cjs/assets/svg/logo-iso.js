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
var SvgLogoIso = function SvgLogoIso(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m.853 10.731 4.398 4.396 9.824-9.816L10.676.916.853 10.731Z",
    fillOpacity: 0.3
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.233 3.115A3.116 3.116 0 0 1 3.116 6.23a3.115 3.115 0 1 1 0-6.229 3.117 3.117 0 0 1 3.118 3.115M16 3.115a3.116 3.116 0 0 1-3.117 3.114 3.115 3.115 0 1 1 0-6.229A3.116 3.116 0 0 1 16 3.115ZM6.233 12.885A3.116 3.116 0 0 1 0 12.884a3.116 3.116 0 0 1 6.233.001M12.883 16a3.114 3.114 0 1 1 0-6.23 3.116 3.116 0 1 1 0 6.23Z"
  })));
};

module.exports = SvgLogoIso;
