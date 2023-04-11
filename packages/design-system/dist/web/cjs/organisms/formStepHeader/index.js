'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var React = require('react');
var reactNativeWeb = require('react-native-web');
var index = require('../../atoms/typographyV2/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
var margin = require('../../styles/margin.js');
require('../../styles/padding.js');
var spacing = require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');

var STEP_INDEX_SIZE = spacing.spacing[24];
var STEP_INDEX_BORDER_RADIUS = 24;
var STEP_INDEX_BORDER_WIDTH = 2;
var SEPARATOR_WIDTH = 48;
var SEPARATOR_HEIGHT = 2;
var SEPARATOR_HORIZONTAL_MARGIN = 16;
var NATIVE_LINE_HEIGHT = 20;
var styles = reactNativeWeb.StyleSheet.create({
  stepsContainer: {
    overflow: 'hidden'
  },
  stepIndex: {
    width: STEP_INDEX_SIZE,
    height: STEP_INDEX_SIZE,
    borderWidth: STEP_INDEX_BORDER_WIDTH,
    borderRadius: STEP_INDEX_BORDER_RADIUS
  },
  separator: {
    width: SEPARATOR_WIDTH,
    height: SEPARATOR_HEIGHT,
    marginHorizontal: SEPARATOR_HORIZONTAL_MARGIN
  }
});
var Separator = function (_a) {
  var _b = _a.checked,
    checked = _b === void 0 ? false : _b;
  var theme = themeV2.useThemeV2();
  return jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
    style: [container.container.center]
  }, {
    children: jsxRuntime.jsx(reactNativeWeb.View, {
      style: [styles.separator, {
        backgroundColor: checked ? theme.base.highlight2[100] : theme.background.silver
      }]
    })
  }));
};
var Step = function (_a) {
  var step = _a.step,
    checked = _a.checked,
    title = _a.title,
    onLayout = _a.onLayout;
  var theme = themeV2.useThemeV2();
  var borderColor = theme.base.highlight2[checked ? 100 : 40];
  var backgroundColor = checked ? theme.base.highlight2[100] : 'transparent';
  var textColor = checked ? theme.text.white[100] : theme.text.black[80];
  return jsxRuntime.jsxs(reactNativeWeb.View, tslib_es6.__assign({
    style: [container.container.row, container.container.alignCenter],
    onLayout: onLayout
  }, {
    children: [jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
      style: [styles.stepIndex, container.container.center, margin.margin.mr16, {
        backgroundColor: backgroundColor,
        borderColor: borderColor
      }]
    }, {
      children: jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
        variant: "caption1",
        color: textColor,
        style: [reactNativeWeb.Platform.select({
          native: {
            lineHeight: NATIVE_LINE_HEIGHT
          },
          web: undefined
        })]
      }, {
        children: step
      }))
    })), jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
      variant: "sub3",
      color: theme.text.black[100]
    }, {
      children: title
    }))]
  }));
};
var FormStepHeader = function (_a) {
  var steps = _a.steps,
    currentStep = _a.currentStep;
  var isSmallScreen = nativeBase.useBreakpointValue({
    base: true,
    md: false
  });
  var stepsWidth = React.useRef({});
  var currentStepIndex = React.useMemo(function () {
    return steps.findIndex(function (step) {
      return step.id === currentStep;
    });
  }, [steps, currentStep]);
  var onLayout = React.useCallback(function (event, id) {
    var _a;
    var width = event.nativeEvent.layout.width;
    stepsWidth.current = tslib_es6.__assign(tslib_es6.__assign({}, stepsWidth.current), (_a = {}, _a[id] = width, _a));
  }, []);
  var stepXPosition = React.useMemo(function () {
    var initialPosition = 0;
    var calculatedPosition = Array.from(Array(currentStepIndex).keys()).reduce(function (position, _, index) {
      return position + stepsWidth.current[steps[index].id] +
      // Include width of the previous steps
      SEPARATOR_WIDTH +
      // Include width of the separator coming after a step
      SEPARATOR_HORIZONTAL_MARGIN * 2 // Include horizontal margin doubled (because it's on left & right)
      ;
    }, initialPosition);
    // To show a bit of the previous separator, we need to subtract half of the separator width
    // Avoid negative values by using Math.max
    return Math.max(initialPosition, calculatedPosition - SEPARATOR_WIDTH / 2);
  }, [currentStepIndex, steps]);
  return jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
    style: [styles.stepsContainer]
  }, {
    children: jsxRuntime.jsx(reactNativeWeb.View, tslib_es6.__assign({
      style: [container.container.row, container.container.alignCenter, isSmallScreen && {
        transform: [{
          translateX: stepXPosition * -1
        }]
      }]
    }, {
      children: steps.map(function (step, index) {
        return jsxRuntime.jsxs(reactNativeWeb.View, tslib_es6.__assign({
          style: [container.container.row, container.container.alignCenter]
        }, {
          children: [jsxRuntime.jsx(Step, {
            step: index + 1,
            title: step.title,
            checked: index <= currentStepIndex,
            onLayout: function (e) {
              return onLayout(e, step.id);
            }
          }), index < steps.length - 1 && jsxRuntime.jsx(Separator, {
            checked: index < currentStepIndex
          })]
        }), step.id);
      })
    }))
  }));
};

exports.FormStepHeader = FormStepHeader;
