'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var colors = require('../../styles/colors.js');
var utils = require('../../styles/utils.js');
var margin = require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
require('react');
var index$1 = require('../../atoms/typography/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('react-native-web');
var index$2 = require('../../atoms/button/index.js');
require('react-native-svg');
require('../../atoms/circleImg/index.js');
var index = require('../../atoms/surface/index.js');
require('../../atoms/toast/index.js');
require('@floating-ui/react-dom-interactions');
require('../../utils/web3.js');
require('../../atoms/input/index.js');
var expandIcon = require('../../assets/svg/expandIcon.js');
var collapseIcon = require('../../assets/svg/collapseIcon.js');

var renderContent = function (content) {
  if (typeof content === 'string') return jsxRuntime.jsx(index$1.Body, {
    children: content
  });
  return content;
};
var styles = utils.makeStyles({
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
    backgroundColor: colors.lightestGray
  }
});
var CollapsableView = function (_a) {
  var title = _a.title,
    content = _a.content,
    isExpanded = _a.isExpanded,
    toggle = _a.toggle;
  return jsxRuntime.jsx(index.Surface, tslib_es6.__assign({
    style: [container.container.fullWidth]
  }, {
    children: jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
      style: [padding.padding.p32]
    }, {
      children: [jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
        style: [container.container.justifySpaceBetween, container.container.alignCenter, container.container.row]
      }, {
        children: [jsxRuntime.jsx(index$1.Header, tslib_es6.__assign({
          weight: "bold"
        }, {
          children: title
        })), jsxRuntime.jsx(index$2.Button, tslib_es6.__assign({
          variant: "primary",
          onPress: toggle,
          style: styles.button,
          touchableOpacityStyle: styles.buttonTouchableOpacity
        }, {
          children: isExpanded ? jsxRuntime.jsx(expandIcon, {}) : jsxRuntime.jsx(collapseIcon, {})
        }))]
      })), isExpanded && jsxRuntime.jsxs(nativeBase.View, {
        children: [jsxRuntime.jsx(nativeBase.View, {
          style: [margin.margin.mt24, styles.divider]
        }), jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
          style: padding.padding.pt24
        }, {
          children: renderContent(content)
        }))]
      })]
    }))
  }));
};

exports.CollapsableView = CollapsableView;
