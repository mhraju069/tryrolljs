'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var React = require('react');
var LinearGradient = require('react-native-linear-gradient');
var utils = require('../../styles/utils.js');
require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
var text = require('../../styles/text.js');
var container = require('../../styles/container.js');
var index = require('../typography/index.js');
var styles$1 = require('./styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var LinearGradient__default = /*#__PURE__*/_interopDefaultLegacy(LinearGradient);

var styles = utils.makeStyles({
  container: {
    borderRadius: 50,
    maxWidth: 600,
    minWidth: 100,
    height: 48
  }
});
var Button = function (_a) {
  var title = _a.title,
    children = _a.children,
    onPress = _a.onPress,
    style = _a.style,
    touchableOpacityStyle = _a.touchableOpacityStyle,
    _b = _a.variant,
    variant = _b === void 0 ? 'primary' : _b,
    inverted = _a.inverted,
    disabled = _a.disabled;
  var _c = React.useState(false),
    isHover = _c[0],
    setIsHover = _c[1];
  var colors = styles$1.getColors({
    disabled: disabled,
    variant: variant,
    inverted: inverted
  });
  return jsxRuntime.jsx(LinearGradient__default["default"], tslib_es6.__assign({
    style: [styles.container,
    // eslint-disable-next-line react-native/no-inline-styles
    {
      borderWidth: colors.borderColor ? 1 : 0,
      borderColor: colors.borderColor
    }, style],
    start: {
      x: 0,
      y: 1
    },
    end: {
      x: 1,
      y: 1
    },
    colors: isHover ? colors.hover.backgroundGradient : colors.backgroundGradient
  }, {
    children: jsxRuntime.jsx(nativeBase.Pressable, tslib_es6.__assign({
      style: [container.container.fullHeight, padding.padding.ph24, container.container.fullWidth, container.container.center, touchableOpacityStyle],
      onPress: onPress,
      disabled: disabled,
      onHoverIn: function () {
        return setIsHover(true);
      },
      onHoverOut: function () {
        return setIsHover(false);
      }
    }, {
      children: title ? jsxRuntime.jsx(index.Body, tslib_es6.__assign({
        weight: "bold",
        style: [text.text.center],
        color: colors.text
      }, {
        children: title
      })) : children
    }))
  }));
};

exports.Button = Button;
