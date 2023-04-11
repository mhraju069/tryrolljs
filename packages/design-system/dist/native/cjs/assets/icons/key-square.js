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
var SvgKeySquare = function SvgKeySquare(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905Zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.752 8.262a3.427 3.427 0 0 0-4.832-.002 3.42 3.42 0 0 0-.843 3.43.75.75 0 0 1-.186.75l-2.566 2.566a.498.498 0 0 0-.072.2v.005l.159 1.188a.28.28 0 0 0 .075.123.222.222 0 0 0 .096.064h.006l1.208.162.025-.002a.414.414 0 0 0 .145-.046l.008-.005a1.25 1.25 0 0 1 .006-.006l2.59-2.58a.75.75 0 0 1 .754-.184 3.397 3.397 0 0 0 3.424-.844c1.33-1.34 1.325-3.504.002-4.819Zm1.057-1.064c-1.922-1.91-5.035-1.912-6.95.002a4.912 4.912 0 0 0-1.331 4.482L6.25 13.96l-.014.014c-.184.194-.31.438-.384.66a1.715 1.715 0 0 0-.084.781l.159 1.194.002.015c.057.374.249.705.489.95.24.243.577.449.976.5l1.193.159c.275.04.552-.004.78-.079.224-.073.48-.203.679-.409l2.28-2.271a4.897 4.897 0 0 0 4.485-1.334l.001-.001c1.91-1.92 1.914-5.036-.003-6.94Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.072 14.886a.75.75 0 0 1 1.061.007l.85.86a.75.75 0 1 1-1.067 1.054l-.85-.86a.75.75 0 0 1 .006-1.06ZM12.395 10.7a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.008a1 1 0 0 1-1-1Z"
  })));
};

module.exports = SvgKeySquare;
