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
var SvgBuyCrypto = function SvgBuyCrypto(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.752 8.357a7.267 7.267 0 0 1 5.89 5.891 5.75 5.75 0 1 0-5.89-5.89ZM8.25 8.5a7.25 7.25 0 1 1 6.686 7.229.75.75 0 0 1-.704-.69 5.759 5.759 0 0 0-5.271-5.271.75.75 0 0 1-.69-.704A9.737 9.737 0 0 1 8.25 8.5Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.5 9.75a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5ZM1.25 15.5a7.25 7.25 0 0 1 7.814-7.229l.015.001a7.259 7.259 0 0 1 6.649 6.649v.015c.01.168.022.369.022.564a7.25 7.25 0 1 1-14.5 0Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.5 12.25a.75.75 0 0 1 .659.392l.774 1.425 1.425.774a.75.75 0 0 1 0 1.318l-1.425.774-.774 1.425a.75.75 0 0 1-1.318 0l-.774-1.425-1.425-.774a.75.75 0 0 1 0-1.318l1.425-.774.774-1.425a.75.75 0 0 1 .659-.392Zm0 2.321-.221.407a.75.75 0 0 1-.301.301l-.407.221.407.221a.75.75 0 0 1 .301.301l.221.407.221-.407a.75.75 0 0 1 .301-.301l.407-.221-.407-.221a.75.75 0 0 1-.301-.301l-.221-.407Z"
  })));
};

module.exports = SvgBuyCrypto;
