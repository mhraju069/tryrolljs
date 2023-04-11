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
var SvgQuestionCircle = function SvgQuestionCircle(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    d: "M13.125 16.5a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM10.5 9c0-.403.135-.78.373-1.048.226-.255.58-.452 1.127-.452.981 0 1.787 1.011 1.523 2.069-.136.541-.458.85-.943 1.316l-.134.128c-.546.53-1.196 1.233-1.196 2.487a.75.75 0 1 0 1.5 0c0-.62.265-.95.739-1.408l.143-.136c.46-.435 1.1-1.039 1.345-2.024C15.463 7.99 14.02 6 12 6c-.953 0-1.723.365-2.248.955C9.24 7.53 9 8.278 9 9a.75.75 0 0 0 1.5 0Zm-9 3C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12ZM12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
  })));
};

module.exports = SvgQuestionCircle;
