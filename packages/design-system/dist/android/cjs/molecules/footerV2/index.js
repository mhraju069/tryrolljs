'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('react-native');
var nativeBase = require('native-base');
var React = require('react');
var logoIso = require('../../assets/svg/logo-iso.js');
var index$1 = require('../../constants/index.js');
var functions = require('../../utils/functions.js');
require('../../utils/web3.js');
var margin = require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
var index = require('../../atoms/typographyV2/index.js');

var FooterOption = function (_a) {
  var title = _a.title,
    link = _a.link,
    _b = _a.isLast,
    isLast = _b === void 0 ? false : _b;
  var theme = themeV2.useThemeV2();
  var handlePress = React.useCallback(function () {
    functions.openLink(link, true);
  }, [link]);
  var containerStlyes = nativeBase.useBreakpointValue({
    base: [!isLast && margin.margin.mb16],
    md: [!isLast && margin.margin.mr16]
  });
  return jsxRuntime.jsx(reactNative.View, tslib_es6.__assign({
    style: containerStlyes
  }, {
    children: jsxRuntime.jsx(reactNative.Pressable, tslib_es6.__assign({
      onPress: handlePress
    }, {
      children: jsxRuntime.jsx(index.TypographyV2, tslib_es6.__assign({
        variant: "caption2",
        color: theme.text.black[30]
      }, {
        children: title
      }))
    }))
  }));
};
var DEFAULT_SOCIAL_LINKS = [{
  title: 'Twitter',
  link: index$1.twitterUrl
}, {
  title: 'Discord',
  link: index$1.discordInviteUrl
}, {
  title: 'Instagram',
  link: index$1.instaUrl
}];
var styles = reactNative.StyleSheet.create({
  mainContainer: {
    maxWidth: 1120
  },
  contentWrapper: {
    borderTopWidth: 1
  },
  linksContainer: {
    flexDirection: 'row'
  }
});
var FooterV2 = function (_a) {
  var _b = _a.social,
    social = _b === void 0 ? DEFAULT_SOCIAL_LINKS : _b,
    navigation = _a.navigation;
  var theme = themeV2.useThemeV2();
  var contentResponsiveStyles = nativeBase.useBreakpointValue({
    md: [container.container.alignCenter, container.container.row]
  });
  var linksContainerResponsiveStyles = nativeBase.useBreakpointValue({
    base: [container.container.justifyStart, margin.margin.mt16],
    md: [container.container.justifySpaceBetween, container.container.flex1, margin.margin.ml16, {
      marginTop: 0
    }]
  });
  var socialContainerResponsiveStyles = nativeBase.useBreakpointValue({
    md: [container.container.row]
  });
  var navigationContainerResponsiveStyles = nativeBase.useBreakpointValue({
    base: [margin.margin.ml40],
    md: [container.container.row, {
      marginLeft: 0
    }]
  });
  var tradeMarkResponsiveStyles = nativeBase.useBreakpointValue({
    base: [margin.margin.mt16],
    md: [{
      marginTop: 0
    }, margin.margin.ml16]
  });
  return jsxRuntime.jsx(reactNative.View, tslib_es6.__assign({
    style: [container.container.fullWidth, padding.padding.ph20, padding.padding.pt16, styles.mainContainer]
  }, {
    children: jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
      style: [container.container.fullWidth, padding.padding.pt16, styles.contentWrapper, contentResponsiveStyles, {
        borderTopColor: theme.background.silver
      }]
    }, {
      children: [jsxRuntime.jsx(logoIso, {}), jsxRuntime.jsxs(reactNative.View, tslib_es6.__assign({
        style: [styles.linksContainer, linksContainerResponsiveStyles]
      }, {
        children: [jsxRuntime.jsx(reactNative.View, tslib_es6.__assign({
          style: [socialContainerResponsiveStyles]
        }, {
          children: social.map(function (item, index) {
            return jsxRuntime.jsx(FooterOption, tslib_es6.__assign({
              isLast: index === social.length - 1
            }, item), item.title);
          })
        })), jsxRuntime.jsx(reactNative.View, tslib_es6.__assign({
          style: [navigationContainerResponsiveStyles]
        }, {
          children: navigation.map(function (item, index) {
            return jsxRuntime.jsx(FooterOption, tslib_es6.__assign({
              isLast: index === social.length - 1
            }, item), item.title);
          })
        }))]
      })), jsxRuntime.jsx(reactNative.View, tslib_es6.__assign({
        style: [tradeMarkResponsiveStyles]
      }, {
        children: jsxRuntime.jsxs(index.TypographyV2, tslib_es6.__assign({
          variant: "text4",
          color: theme.text.black[30]
        }, {
          children: ["\u00A9", new Date().getFullYear(), " Roll"]
        }))
      }))]
    }))
  }));
};

exports.FooterV2 = FooterV2;
