import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { View } from 'native-base';
import { lightestGray } from '../../styles/colors.js';
import { makeStyles } from '../../styles/utils.js';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import 'react';
import { Header, Body } from '../../atoms/typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import 'react-native-web';
import { Button } from '../../atoms/button/index.js';
import 'react-native-svg';
import '../../atoms/circleImg/index.js';
import { Surface } from '../../atoms/surface/index.js';
import '../../atoms/toast/index.js';
import '@floating-ui/react-dom-interactions';
import '../../utils/web3.js';
import '../../atoms/input/index.js';
import SvgExpandIcon from '../../assets/svg/expandIcon.js';
import SvgCollapseIcon from '../../assets/svg/collapseIcon.js';

var renderContent = function (content) {
  if (typeof content === 'string') return jsx(Body, {
    children: content
  });
  return content;
};
var styles = makeStyles({
  button: {
    width: 'auto',
    height: 'auto',
    minWidth: undefined
  },
  buttonTouchableOpacity: {
    paddingLeft: 0,
    paddingRight: 0
  },
  divider: {
    height: 1,
    backgroundColor: lightestGray
  }
});
var CollapsableView = function (_a) {
  var title = _a.title,
    content = _a.content,
    isExpanded = _a.isExpanded,
    toggle = _a.toggle;
  return jsx(Surface, __assign({
    style: [container.fullWidth]
  }, {
    children: jsxs(View, __assign({
      style: [padding.p32]
    }, {
      children: [jsxs(View, __assign({
        style: [container.justifySpaceBetween, container.alignCenter, container.row]
      }, {
        children: [jsx(Header, __assign({
          weight: "bold"
        }, {
          children: title
        })), jsx(Button, __assign({
          variant: "primary",
          onPress: toggle,
          style: styles.button,
          touchableOpacityStyle: styles.buttonTouchableOpacity
        }, {
          children: isExpanded ? jsx(SvgExpandIcon, {}) : jsx(SvgCollapseIcon, {})
        }))]
      })), isExpanded && jsxs(View, {
        children: [jsx(View, {
          style: [margin.mt24, styles.divider]
        }), jsx(View, __assign({
          style: padding.pt24
        }, {
          children: renderContent(content)
        }))]
      })]
    }))
  }));
};

export { CollapsableView };
