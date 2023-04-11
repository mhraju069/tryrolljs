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
var SvgLink = function SvgLink(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    d: "M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707a4.965 4.965 0 0 0-3.535-1.465A4.965 4.965 0 0 0 7.05 9.88L4.929 12a5.008 5.008 0 0 0 0 7.071 4.984 4.984 0 0 0 3.535 1.462A4.984 4.984 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.12Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    d: "m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.12c-1.133 1.134-3.11 1.134-4.242 0L10.586 12l-1.414 1.414.707.707a4.965 4.965 0 0 0 3.535 1.465 4.965 4.965 0 0 0 3.535-1.465L19.07 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0Z"
  })));
};

module.exports = SvgLink;
