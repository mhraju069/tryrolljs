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
var SvgFilter = function SvgFilter(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.4 2.85c-.662 0-1.25.54-1.25 1.35v2.3c0 .157.06.423.197.73.135.302.313.57.484.74l.013.014 3.8 4a.748.748 0 0 1 .042.048c.254.317.488.733.66 1.165.172.427.304.925.304 1.403v5.3c0 .967 1.114 1.575 1.952 1.065l1.393-.896a.804.804 0 0 1 .02-.012c.09-.055.233-.201.357-.44.122-.235.178-.466.178-.617v-4.3c0-.515.127-1.065.335-1.555.205-.484.514-.967.926-1.313l4.274-3.777a2.96 2.96 0 0 0 .52-.803c.16-.352.245-.693.245-.952V4.1c0-.686-.564-1.25-1.25-1.25H5.4ZM2.65 4.2c0-1.59 1.212-2.85 2.75-2.85h13.2a2.756 2.756 0 0 1 2.75 2.75v2.2c0 .542-.164 1.1-.38 1.573-.215.475-.512.93-.84 1.257a.726.726 0 0 1-.033.032l-4.3 3.8a.766.766 0 0 1-.017.014c-.182.153-.37.417-.514.754a2.591 2.591 0 0 0-.216.97V19c0 .45-.144.918-.347 1.309-.199.382-.502.781-.905 1.027l-1.392.895-.013.008C10.633 23.323 8.15 22.13 8.15 19.9v-5.3c0-.222-.067-.524-.196-.846a3.302 3.302 0 0 0-.421-.762l-3.77-3.969a4.065 4.065 0 0 1-.784-1.179c-.188-.417-.329-.9-.329-1.344V4.2Z"
  })));
};

module.exports = SvgFilter;
