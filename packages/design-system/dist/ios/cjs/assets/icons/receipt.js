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
var SvgReceipt = function SvgReceipt(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.895 2.496C4.84 1.485 6.328 1.25 8.22 1.25h7.56c1.891 0 3.38.235 4.324 1.247.929.994 1.14 2.541 1.136 4.544V18.31c0 .725-.098 1.367-.31 1.889-.212.524-.564.977-1.09 1.205-.532.23-1.102.167-1.621-.057-.513-.22-1.019-.614-1.506-1.134l-.002-.002c-.269-.288-.575-.392-.843-.377-.268.015-.562.15-.798.466l-1.01 1.35-.002.003c-.525.694-1.265 1.1-2.063 1.1-.798 0-1.538-.406-2.063-1.1l-.003-.004L8.92 20.3c-.236-.315-.53-.451-.798-.466-.268-.015-.574.089-.843.377l-.002.002c-.485.518-.99.91-1.502 1.13-.52.223-1.089.285-1.62.056-.527-.227-.88-.68-1.094-1.205-.213-.523-.311-1.166-.311-1.894V7.04c0-2.004.215-3.55 1.145-4.544ZM4.99 3.521c-.485.52-.74 1.493-.74 3.519V18.3c0 .607.084 1.043.2 1.328.116.283.238.367.298.393.054.024.182.053.434-.056.26-.111.601-.351 1-.778l.548.513-.549-.511c.551-.592 1.28-.893 2.022-.853.742.04 1.433.42 1.917 1.064l1.008 1.347.001.002c.285.375.605.504.866.504s.582-.13.866-.504l.001-.002 1.008-1.346c.483-.645 1.175-1.024 1.917-1.065.741-.04 1.47.261 2.02.852.403.429.745.67 1.006.782.253.109.38.08.432.056.059-.025.18-.109.296-.392.115-.285.199-.719.199-1.324V7.038c.005-2.026-.248-3-.732-3.517-.467-.5-1.34-.771-3.228-.771H8.22c-1.889 0-2.761.27-3.23.771Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7ZM8.25 11a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
  })));
};

module.exports = SvgReceipt;
