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
var SvgSetting = function SvgSetting(props) {
  return /*#__PURE__*/React__namespace.createElement(Svg__default["default"], _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _Path || (_Path = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
  })), _Path2 || (_Path2 = /*#__PURE__*/React__namespace.createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.603 3.77a.919.919 0 0 0-1.25-.335l-.01.006-1.73.99a1.15 1.15 0 0 0-.424 1.564l-.649.375.649-.376c.535.923.679 1.935.2 2.764-.477.83-1.424 1.212-2.489 1.212-.633 0-1.15.522-1.15 1.15v1.76c0 .628.517 1.15 1.15 1.15 1.065 0 2.012.383 2.49 1.212.478.83.334 1.84-.2 2.764a1.15 1.15 0 0 0 .422 1.563l1.742.997a.919.919 0 0 0 1.25-.336l.107-.186c.535-.922 1.341-1.551 2.298-1.551.957 0 1.761.629 2.291 1.553v.001l.106.183a.92.92 0 0 0 1.25.336l.011-.007 1.73-.99a1.147 1.147 0 0 0 .423-1.565c-.534-.923-.677-1.933-.2-2.762.478-.83 1.425-1.212 2.49-1.212.633 0 1.15-.521 1.15-1.15v-1.76c0-.633-.522-1.15-1.15-1.15-1.065 0-2.012-.382-2.49-1.212-.478-.829-.334-1.84.2-2.763a1.15 1.15 0 0 0-.422-1.564l-1.742-.996a.919.919 0 0 0-1.25.335l-.107.186c-.535.923-1.341 1.552-2.298 1.552-.957 0-1.76-.63-2.29-1.553l-.002-.002-.106-.183Zm-2.01-1.628c1.159-.685 2.63-.265 3.302.865l.004.007.11.19.002.003c.37.646.756.8.99.8.236 0 .625-.156 1-.803l.114-.197c.672-1.13 2.143-1.55 3.303-.865l1.724.987a2.65 2.65 0 0 1 .977 3.616v.001c-.375.647-.316 1.06-.2 1.263.118.204.446.461 1.191.461a2.656 2.656 0 0 1 2.65 2.65v1.76a2.656 2.656 0 0 1-2.65 2.65c-.745 0-1.073.258-1.19.46-.117.204-.176.617.199 1.264l.002.004a2.647 2.647 0 0 1-.979 3.613l-1.725.987c-1.159.686-2.63.265-3.302-.864l-.004-.008-.11-.19-.002-.003c-.37-.645-.756-.8-.99-.8-.236 0-.625.156-1 .803l-.114.198c-.672 1.13-2.143 1.55-3.302.864l-1.725-.987a2.65 2.65 0 0 1-.977-3.616v-.001c.375-.647.316-1.06.2-1.263-.118-.203-.446-.46-1.191-.46a2.656 2.656 0 0 1-2.65-2.65v-1.76A2.656 2.656 0 0 1 3.9 8.47c.745 0 1.073-.258 1.19-.462.117-.203.176-.616-.199-1.263a2.649 2.649 0 0 1 .976-3.617l1.725-.987Z"
  })));
};

module.exports = SvgSetting;
