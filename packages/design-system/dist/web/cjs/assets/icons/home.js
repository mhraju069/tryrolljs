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
var SvgHome = function SvgHome(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.484 1.27c1.035-.025 2.112.238 2.966.836l6.179 4.329c.62.432 1.142 1.098 1.507 1.798.366.7.614 1.51.614 2.267v7.28c0 2.723-2.225 4.96-4.96 4.96H6.21c-2.737 0-4.96-2.238-4.96-4.97v-7.41c0-.71.224-1.48.554-2.151.33-.673.802-1.322 1.365-1.76l5.39-4.2c.825-.642 1.89-.956 2.925-.98ZM9.48 3.431l-5.389 4.2c-.336.261-.68.707-.94 1.237-.26.53-.401 1.072-.401 1.491v7.41c0 1.908 1.557 3.47 3.46 3.47h11.58a3.473 3.473 0 0 0 3.46-3.46V10.5c0-.453-.157-1.023-.444-1.573-.287-.55-.665-1.004-1.035-1.262h-.001l-6.18-4.33c-.546-.382-1.294-.585-2.071-.566-.777.018-1.513.255-2.039.663Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 14.24a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z"
  })));
};

module.exports = SvgHome;
