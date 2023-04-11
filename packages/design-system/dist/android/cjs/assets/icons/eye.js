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
var SvgEye = function SvgEye(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 9.17A2.826 2.826 0 0 0 9.17 12 2.826 2.826 0 0 0 12 14.83 2.826 2.826 0 0 0 14.83 12 2.826 2.826 0 0 0 12 9.17ZM7.67 12A4.326 4.326 0 0 1 12 7.67 4.326 4.326 0 0 1 16.33 12 4.326 4.326 0 0 1 12 16.33 4.326 4.326 0 0 1 7.67 12Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.257 8.997C4.648 5.24 8.152 2.97 12 2.97c3.848 0 7.352 2.269 9.743 6.028.545.854.792 1.948.792 2.997 0 1.05-.247 2.143-.792 2.998C19.352 18.75 15.848 21.02 12 21.02c-3.848 0-7.352-2.269-9.743-6.027-.545-.855-.792-1.949-.792-2.998 0-1.049.247-2.143.792-2.998ZM12 4.47c-3.212 0-6.288 1.891-8.477 5.333h-.001c-.355.556-.557 1.351-.557 2.192 0 .841.202 1.636.557 2.192C5.713 17.63 8.789 19.52 12 19.52c3.212 0 6.288-1.891 8.477-5.332v-.001c.355-.556.558-1.351.558-2.192 0-.84-.203-1.636-.557-2.191l-.001-.001C18.288 6.36 15.212 4.47 12 4.47Z"
  })));
};

module.exports = SvgEye;
