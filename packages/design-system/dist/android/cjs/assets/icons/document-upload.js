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

var _Path, _Path2, _Path3, _Path4;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgDocumentUpload = function SvgDocumentUpload(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.287 10.307A.75.75 0 0 1 9.75 11v6a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 .817-.163Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.47 10.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06Z"
  })), _Path3 || (_Path3 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.155 4.155C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845v-5a.75.75 0 0 1 1.5 0v5c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905C4.429 1.76 6.426 1.25 9 1.25h5a.75.75 0 0 1 0 1.5H9c-2.426 0-3.93.49-4.845 1.405Z"
  })), _Path4 || (_Path4 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.713 1.307a.75.75 0 0 1 .817.163l8 8a.75.75 0 0 1-.53 1.28h-4c-1.541 0-2.808-.247-3.655-1.095C13.497 8.808 13.25 7.542 13.25 6V2a.75.75 0 0 1 .463-.693Zm1.037 2.504V6c0 1.458.253 2.192.655 2.595.403.402 1.136.655 2.595.655h2.19l-5.44-5.44Z"
  })));
};

module.exports = SvgDocumentUpload;
