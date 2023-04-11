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
var SvgReceiptSearch = function SvgReceiptSearch(props) {
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
    d: "M18.2 15.75a2.45 2.45 0 1 0 0 4.9 2.45 2.45 0 0 0 0-4.9Zm-3.95 2.45a3.95 3.95 0 1 1 7.9 0 3.95 3.95 0 0 1-7.9 0Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.47 20.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06ZM7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7ZM8.25 11a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
  })));
};

module.exports = SvgReceiptSearch;
