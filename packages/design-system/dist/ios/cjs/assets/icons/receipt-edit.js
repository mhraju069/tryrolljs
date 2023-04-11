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
var SvgReceiptEdit = function SvgReceiptEdit(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.895 2.496C4.84 1.485 6.328 1.25 8.22 1.25h7.56c1.892 0 3.38.235 4.325 1.246.93.994 1.145 2.54 1.145 4.544v4.26a.75.75 0 0 1-1.5 0V7.04c0-2.026-.255-3-.74-3.519-.47-.501-1.341-.771-3.23-.771H8.22c-1.889 0-2.76.27-3.23.771-.485.52-.74 1.493-.74 3.519V18.3c0 .605.084 1.038.2 1.323.115.283.238.367.298.393.054.024.181.053.433-.056.26-.112.6-.352 1-.781a.742.742 0 0 1 .018-.018l.003-.004c1.137-1.197 2.93-1.1 3.919.224l1.01 1.35a.75.75 0 1 1-1.202.898l-1.01-1.35c-.429-.574-1.13-.618-1.633-.085l-.015.015-.001.002c-.483.516-.985.906-1.494 1.126-.52.224-1.09.286-1.621.057-.527-.227-.88-.68-1.094-1.204-.213-.522-.311-1.165-.311-1.89V7.04c0-2.004.215-3.55 1.145-4.544Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7ZM8.25 11a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM19.134 13.457c.663-.068 1.274.23 1.817.773.547.547.848 1.158.782 1.823-.061.625-.434 1.11-.782 1.458l-3.532 3.532a1.739 1.739 0 0 1-.475.34 1.898 1.898 0 0 1-.536.178l-.013.002-1.348.19c-.442.063-.898-.053-1.227-.382-.328-.33-.445-.784-.382-1.226l.192-1.361c.03-.194.103-.383.18-.536.078-.153.188-.326.33-.468l3.54-3.54c.348-.348.832-.72 1.454-.783Zm.154 1.492c-.108.011-.285.09-.547.352l-3.538 3.538a.567.567 0 0 0-.09.179l-.175 1.235 1.236-.174a.626.626 0 0 0 .159-.073l.007-.005a.545.545 0 0 1 .01-.01l3.54-3.54c.263-.263.34-.438.35-.546.007-.067.004-.26-.35-.614-.346-.347-.536-.349-.602-.342Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.499 14.558a.75.75 0 0 1 .923.522c.23.826.872 1.468 1.698 1.698a.75.75 0 0 1-.401 1.445 3.935 3.935 0 0 1-2.742-2.742.75.75 0 0 1 .522-.923Z"
  })));
};

module.exports = SvgReceiptEdit;
