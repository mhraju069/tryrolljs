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
var SvgGasStation = function SvgGasStation(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.886 3.301C4.52 3.64 4.25 4.177 4.25 5v16.25h12.5V5c0-.823-.27-1.361-.636-1.699-.376-.346-.93-.551-1.614-.551h-8c-.684 0-1.238.205-1.614.551ZM3.869 2.2c.71-.654 1.655-.949 2.631-.949h8c.976 0 1.922.295 2.63.949.72.662 1.12 1.624 1.12 2.801v17a.75.75 0 0 1-.75.75h-14a.75.75 0 0 1-.75-.75V5c0-1.177.4-2.139 1.12-2.801Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.25 22a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75ZM6.562 4.849c.526-.46 1.2-.609 1.828-.609h4.23c.627 0 1.302.15 1.828.609.545.475.812 1.177.812 2.031v1.23c0 .854-.267 1.557-.812 2.032-.526.459-1.2.608-1.828.608H8.39c-.627 0-1.302-.15-1.828-.608-.545-.475-.812-1.178-.812-2.032V6.88c0-.854.267-1.556.812-2.031Zm.986 1.13c-.14.123-.298.365-.298.901v1.23c0 .536.158.779.298.901.159.139.43.24.842.24h4.23c.413 0 .683-.101.842-.24.14-.122.298-.365.298-.9V6.88c0-.537-.158-.78-.298-.902-.159-.138-.43-.239-.842-.239H8.39c-.413 0-.683.1-.842.24ZM5.75 13a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM19.33 8.665a.75.75 0 0 1 1.005-.336l2 1a.75.75 0 0 1 .415.671v6a.75.75 0 0 1-.748.75l-4.5.01a.75.75 0 0 1-.004-1.5l3.752-.008v-4.788l-1.585-.793a.75.75 0 0 1-.336-1.006Z"
  })));
};

module.exports = SvgGasStation;
