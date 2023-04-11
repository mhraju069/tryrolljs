import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { Pressable } from 'native-base';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { makeStyles } from '../../styles/utils.js';
import '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import { text } from '../../styles/text.js';
import { container } from '../../styles/container.js';
import { Body } from '../typography/index.js';
import { getColors } from './styles.js';

var styles = makeStyles({
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
  var _c = useState(false),
    isHover = _c[0],
    setIsHover = _c[1];
  var colors = getColors({
    disabled: disabled,
    variant: variant,
    inverted: inverted
  });
  return jsx(LinearGradient, __assign({
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
    children: jsx(Pressable, __assign({
      style: [container.fullHeight, padding.ph24, container.fullWidth, container.center, touchableOpacityStyle],
      onPress: onPress,
      disabled: disabled,
      onHoverIn: function () {
        return setIsHover(true);
      },
      onHoverOut: function () {
        return setIsHover(false);
      }
    }, {
      children: title ? jsx(Body, __assign({
        weight: "bold",
        style: [text.center],
        color: colors.text
      }, {
        children: title
      })) : children
    }))
  }));
};

export { Button };
