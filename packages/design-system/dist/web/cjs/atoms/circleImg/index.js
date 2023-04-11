'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNativeWeb = require('react-native-web');
var BoringAvatar = require('boring-avatars');
var nativeBase = require('native-base');
var utils = require('../../styles/utils.js');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
require('../../styles/container.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var BoringAvatar__default = /*#__PURE__*/_interopDefaultLegacy(BoringAvatar);

var Avatar = reactNativeWeb.Platform.select({
  web: function (_a) {
    var size = _a.size,
      color = _a.color;
    return jsxRuntime.jsx(BoringAvatar__default["default"], {
      size: size,
      variant: "marble",
      colors: color
    });
  },
  default: function (_a) {
    var size = _a.size,
      color = _a.color;
    return jsxRuntime.jsx(nativeBase.Avatar, {
      style: {
        width: size,
        height: size
      },
      color: color
    });
  }
});
var styles = utils.makeStyles({
  borderRadius: {
    borderRadius: 100
  },
  bg: {
    backgroundColor: 'grey'
  }
});
var DEFAULT_CIRCLE_IMG_SIZE = 48;
var CircleImg = function (_a) {
  var _b = _a.size,
    size = _b === void 0 ? DEFAULT_CIRCLE_IMG_SIZE : _b,
    style = _a.style,
    uri = _a.uri,
    color = _a.color;
  if (uri) return jsxRuntime.jsx(reactNativeWeb.Image, {
    source: {
      uri: uri
    },
    style: [styles.borderRadius, styles.bg, {
      height: size,
      width: size
    }, style]
  });
  return jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
    style: [styles.borderRadius, style]
  }, {
    children: jsxRuntime.jsx(Avatar, {
      size: size,
      color: color
    })
  }));
};

exports.CircleImg = CircleImg;
exports.DEFAULT_CIRCLE_IMG_SIZE = DEFAULT_CIRCLE_IMG_SIZE;
