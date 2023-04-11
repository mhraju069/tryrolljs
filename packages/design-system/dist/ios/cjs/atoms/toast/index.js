'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('react-native');
var React = require('react');
var nativeBase = require('native-base');
var colors = require('../../styles/colors.js');
var utils = require('../../styles/utils.js');
var margin = require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
var text = require('../../styles/text.js');
var container = require('../../styles/container.js');
var closeCircle = require('../../assets/svg/closeCircle.js');
var index = require('../typography/index.js');

var TOAST_COLOR_MAP = {
  light: {
    backgroundColor: colors.white,
    color: colors.charcoalBlack,
    secondaryBackgroundColor: colors.ghostWhite,
    borderColor: colors.cyanBlue
  },
  dark: {
    backgroundColor: colors.charcoalBlack,
    color: colors.white,
    secondaryBackgroundColor: colors.black,
    borderColor: colors.charcoalBlack
  },
  success: {
    backgroundColor: colors.white,
    color: colors.charcoalBlack,
    secondaryBackgroundColor: colors.ghostWhite,
    borderColor: colors.green
  },
  error: {
    backgroundColor: colors.white,
    color: colors.charcoalBlack,
    secondaryBackgroundColor: colors.ghostWhite,
    borderColor: colors.crimson
  },
  warn: {
    backgroundColor: colors.white,
    color: colors.charcoalBlack,
    secondaryBackgroundColor: colors.ghostWhite,
    borderColor: colors.orange
  }
};
var isWeb = reactNative.Platform.OS === 'web';
var styles = utils.makeStyles({
  wrapper: {
    maxWidth: '100%',
    width: 300,
    minWidth: isWeb ? undefined : '100%'
  },
  container: {
    borderLeftWidth: 4
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 16
  },
  nativeActionDivider: {
    height: 1
  }
});
var Toast = function (_a) {
  var title = _a.title,
    description = _a.description,
    action = _a.action,
    onClose = _a.onClose,
    _b = _a.variant,
    variant = _b === void 0 ? 'light' : _b,
    style = _a.style;
  var _c = TOAST_COLOR_MAP[variant],
    backgroundColor = _c.backgroundColor,
    color = _c.color,
    secondaryBackgroundColor = _c.secondaryBackgroundColor,
    borderColor = _c.borderColor;
  var actionNode = React.useMemo(function () {
    if (!action) {
      return null;
    }
    if (isWeb) {
      return jsxRuntime.jsx(reactNative.TouchableOpacity, tslib_es6.__assign({
        style: margin.margin.mt8,
        onPress: action.onPress
      }, {
        children: jsxRuntime.jsx(index.Caption, tslib_es6.__assign({
          color: color,
          weight: "semiBold",
          underline: true
        }, {
          children: action.title
        }))
      }));
    }
    return jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [jsxRuntime.jsx(reactNative.View, {
        style: [styles.nativeActionDivider, margin.margin.mt16, margin.margin.mb8, {
          backgroundColor: secondaryBackgroundColor
        }]
      }), jsxRuntime.jsx(reactNative.TouchableOpacity, tslib_es6.__assign({
        onPress: action.onPress
      }, {
        children: jsxRuntime.jsx(index.Caption, tslib_es6.__assign({
          style: text.text.center,
          color: color,
          weight: "semiBold"
        }, {
          children: action.title
        }))
      }))]
    });
  }, [action, color, secondaryBackgroundColor]);
  return jsxRuntime.jsx(reactNative.View, tslib_es6.__assign({
    style: [styles.wrapper]
  }, {
    children: jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
      style: [styles.container, margin.margin.mh16, padding.padding.p16, container.container.shadow, container.container.borderRadius, {
        backgroundColor: backgroundColor,
        borderColor: borderColor
      }, style]
    }, {
      children: [jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
        style: padding.padding.pr32
      }, {
        children: [title && jsxRuntime.jsx(index.Body, tslib_es6.__assign({
          color: color,
          weight: "semiBold"
        }, {
          children: title
        })), description && jsxRuntime.jsx(index.Body, tslib_es6.__assign({
          color: color
        }, {
          children: description
        }))]
      })), jsxRuntime.jsx(reactNative.TouchableOpacity, tslib_es6.__assign({
        style: styles.closeButton,
        onPress: onClose
      }, {
        children: jsxRuntime.jsx(closeCircle, {
          color: color
        })
      })), actionNode]
    }))
  }));
};
var toast = function (_a) {
  var title = _a.title,
    description = _a.description,
    onClose = _a.onClose,
    action = _a.action,
    _b = _a.variant,
    variant = _b === void 0 ? 'light' : _b,
    duration = _a.duration;
  var toastId = nativeBase.Toast.show({
    placement: isWeb ? 'top-right' : 'bottom',
    duration: duration,
    render: function () {
      return jsxRuntime.jsx(Toast, {
        title: title,
        description: description,
        onClose: function (e) {
          onClose === null || onClose === void 0 ? void 0 : onClose(e);
          nativeBase.Toast.close(toastId);
        },
        action: action,
        variant: variant
      });
    }
  });
};
Toast.show = toast;

exports.TOAST_COLOR_MAP = TOAST_COLOR_MAP;
exports.Toast = Toast;
