import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Platform, TouchableOpacity, View } from 'react-native-web';
import { useMemo } from 'react';
import { Toast as Toast$1 } from 'native-base';
import { white, charcoalBlack, ghostWhite, cyanBlue, black, green, crimson, orange } from '../../styles/colors.js';
import { makeStyles } from '../../styles/utils.js';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import { text } from '../../styles/text.js';
import { container } from '../../styles/container.js';
import SvgCloseCircle from '../../assets/svg/closeCircle.js';
import { Caption, Body } from '../typography/index.js';

var TOAST_COLOR_MAP = {
  light: {
    backgroundColor: white,
    color: charcoalBlack,
    secondaryBackgroundColor: ghostWhite,
    borderColor: cyanBlue
  },
  dark: {
    backgroundColor: charcoalBlack,
    color: white,
    secondaryBackgroundColor: black,
    borderColor: charcoalBlack
  },
  success: {
    backgroundColor: white,
    color: charcoalBlack,
    secondaryBackgroundColor: ghostWhite,
    borderColor: green
  },
  error: {
    backgroundColor: white,
    color: charcoalBlack,
    secondaryBackgroundColor: ghostWhite,
    borderColor: crimson
  },
  warn: {
    backgroundColor: white,
    color: charcoalBlack,
    secondaryBackgroundColor: ghostWhite,
    borderColor: orange
  }
};
var isWeb = Platform.OS === 'web';
var styles = makeStyles({
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
  var actionNode = useMemo(function () {
    if (!action) {
      return null;
    }
    if (isWeb) {
      return jsx(TouchableOpacity, __assign({
        style: margin.mt8,
        onPress: action.onPress
      }, {
        children: jsx(Caption, __assign({
          color: color,
          weight: "semiBold",
          underline: true
        }, {
          children: action.title
        }))
      }));
    }
    return jsxs(Fragment, {
      children: [jsx(View, {
        style: [styles.nativeActionDivider, margin.mt16, margin.mb8, {
          backgroundColor: secondaryBackgroundColor
        }]
      }), jsx(TouchableOpacity, __assign({
        onPress: action.onPress
      }, {
        children: jsx(Caption, __assign({
          style: text.center,
          color: color,
          weight: "semiBold"
        }, {
          children: action.title
        }))
      }))]
    });
  }, [action, color, secondaryBackgroundColor]);
  return jsx(View, __assign({
    style: [styles.wrapper]
  }, {
    children: jsxs(View, __assign({
      style: [styles.container, margin.mh16, padding.p16, container.shadow, container.borderRadius, {
        backgroundColor: backgroundColor,
        borderColor: borderColor
      }, style]
    }, {
      children: [jsxs(View, __assign({
        style: padding.pr32
      }, {
        children: [title && jsx(Body, __assign({
          color: color,
          weight: "semiBold"
        }, {
          children: title
        })), description && jsx(Body, __assign({
          color: color
        }, {
          children: description
        }))]
      })), jsx(TouchableOpacity, __assign({
        style: styles.closeButton,
        onPress: onClose
      }, {
        children: jsx(SvgCloseCircle, {
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
  var toastId = Toast$1.show({
    placement: isWeb ? 'top-right' : 'bottom',
    duration: duration,
    render: function () {
      return jsx(Toast, {
        title: title,
        description: description,
        onClose: function (e) {
          onClose === null || onClose === void 0 ? void 0 : onClose(e);
          Toast$1.close(toastId);
        },
        action: action,
        variant: variant
      });
    }
  });
};
Toast.show = toast;

export { TOAST_COLOR_MAP, Toast };
