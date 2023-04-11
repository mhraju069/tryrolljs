import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useBreakpointValue } from 'native-base';
import { useRef, useMemo, useCallback } from 'react';
import { StyleSheet, View, Platform } from 'react-native-web';
import { TypographyV2 } from '../../atoms/typographyV2/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import { margin } from '../../styles/margin.js';
import '../../styles/padding.js';
import { spacing } from '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';

var STEP_INDEX_SIZE = spacing[24];
var STEP_INDEX_BORDER_RADIUS = 24;
var STEP_INDEX_BORDER_WIDTH = 2;
var SEPARATOR_WIDTH = 48;
var SEPARATOR_HEIGHT = 2;
var SEPARATOR_HORIZONTAL_MARGIN = 16;
var NATIVE_LINE_HEIGHT = 20;
var styles = StyleSheet.create({
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
  var theme = useThemeV2();
  return jsx(View, __assign({
    style: [container.center]
  }, {
    children: jsx(View, {
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
  var theme = useThemeV2();
  var borderColor = theme.base.highlight2[checked ? 100 : 40];
  var backgroundColor = checked ? theme.base.highlight2[100] : 'transparent';
  var textColor = checked ? theme.text.white[100] : theme.text.black[80];
  return jsxs(View, __assign({
    style: [container.row, container.alignCenter],
    onLayout: onLayout
  }, {
    children: [jsx(View, __assign({
      style: [styles.stepIndex, container.center, margin.mr16, {
        backgroundColor: backgroundColor,
        borderColor: borderColor
      }]
    }, {
      children: jsx(TypographyV2, __assign({
        variant: "caption1",
        color: textColor,
        style: [Platform.select({
          native: {
            lineHeight: NATIVE_LINE_HEIGHT
          },
          web: undefined
        })]
      }, {
        children: step
      }))
    })), jsx(TypographyV2, __assign({
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
  var isSmallScreen = useBreakpointValue({
    base: true,
    md: false
  });
  var stepsWidth = useRef({});
  var currentStepIndex = useMemo(function () {
    return steps.findIndex(function (step) {
      return step.id === currentStep;
    });
  }, [steps, currentStep]);
  var onLayout = useCallback(function (event, id) {
    var _a;
    var width = event.nativeEvent.layout.width;
    stepsWidth.current = __assign(__assign({}, stepsWidth.current), (_a = {}, _a[id] = width, _a));
  }, []);
  var stepXPosition = useMemo(function () {
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
  return jsx(View, __assign({
    style: [styles.stepsContainer]
  }, {
    children: jsx(View, __assign({
      style: [container.row, container.alignCenter, isSmallScreen && {
        transform: [{
          translateX: stepXPosition * -1
        }]
      }]
    }, {
      children: steps.map(function (step, index) {
        return jsxs(View, __assign({
          style: [container.row, container.alignCenter]
        }, {
          children: [jsx(Step, {
            step: index + 1,
            title: step.title,
            checked: index <= currentStepIndex,
            onLayout: function (e) {
              return onLayout(e, step.id);
            }
          }), index < steps.length - 1 && jsx(Separator, {
            checked: index < currentStepIndex
          })]
        }), step.id);
      })
    }))
  }));
};

export { FormStepHeader };
