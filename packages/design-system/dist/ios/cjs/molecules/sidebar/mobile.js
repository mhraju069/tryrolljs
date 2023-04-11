'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var React = require('react');
var reactNative = require('react-native');
require('../../atoms/typography/index.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var themeV2 = require('../../hooks/themeV2.js');
require('@web3-react/core');
require('../../atoms/button/index.js');
var index$3 = require('../../atoms/buttonV2/index.js');
require('../../atoms/circleImg/index.js');
var margin = require('../../styles/margin.js');
var padding = require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
var index$4 = require('../../atoms/typographyV2/index.js');
var functions = require('../../utils/functions.js');
require('../../utils/web3.js');
require('@floating-ui/react-native');
require('../../atoms/input/index.js');
var index$1 = require('../../atoms/icon/index.js');
var index$2 = require('../sidebarOptions/index.js');
var index = require('../web3Button/index.js');

var styles = reactNative.StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1
  },
  closeIconContainer: {
    position: 'absolute',
    right: 16,
    top: 12
  },
  menuContainer: {
    width: 290
  }
});
var DIVIDER_HEIGHT = 1;
var HEADER_Z_INDEX = 100;
var MobileSidebar = function (_a) {
  var logo = _a.logo,
    _b = _a.withConnectWallet,
    withConnectWallet = _b === void 0 ? false : _b,
    header = _a.header,
    footerOptionsOnMobile = _a.footerOptionsOnMobile,
    sections = _a.sections,
    selectedOptionId = _a.selectedOptionId;
  var _c = React.useState(false),
    isOpen = _c[0],
    setIsOpen = _c[1];
  var height = reactNative.Dimensions.get('window').height;
  var width = reactNative.Dimensions.get('window').width;
  var theme = themeV2.useThemeV2();
  var handleOpen = function () {
    return setIsOpen(true);
  };
  var handleClose = function () {
    return setIsOpen(false);
  };
  var isNative = reactNative.Platform.OS !== 'web';
  var overlayStyles = {
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: height,
    position: isNative ? 'absolute' : 'fixed'
  };
  var headerStyles = {
    position: !isNative ? 'sticky' : 'relative',
    top: 0
  };
  var dividerStyles = {
    borderBottomWidth: DIVIDER_HEIGHT,
    borderColor: theme.background.silver
  };
  var showWeb3Button = withConnectWallet && !isNative;
  return jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
    style: [container.container.row, container.container.alignCenter, container.container.justifySpaceBetween, padding.padding.pv8, padding.padding.ph20, headerStyles, {
      backgroundColor: theme.background.white,
      zIndex: HEADER_Z_INDEX
    }]
  }, {
    children: [logo.mobileHeader, jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
      style: [container.container.row, container.container.alignCenter]
    }, {
      children: [showWeb3Button && jsxRuntime.jsx(index.Web3Button, {
        connectedVariant: "avatar"
      }), jsxRuntime.jsx(reactNative.Pressable, tslib_es6.__assign({
        style: [margin.margin.ml16],
        onPress: handleOpen
      }, {
        children: !isOpen ? jsxRuntime.jsx(index$1.Icon, {
          variant: "menu",
          width: 32,
          height: 32,
          color: theme.base.primary[100]
        }) : jsxRuntime.jsx(nativeBase.View, {
          width: 8,
          height: 8
        })
      })), jsxRuntime.jsx(nativeBase.Slide, tslib_es6.__assign({
        in: isOpen,
        placement: "left",
        _overlay: {
          isOpen: isOpen,
          style: overlayStyles
        }
      }, {
        children: jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
          testID: "overlay-container",
          style: [styles.container, {
            width: width
          }]
        }, {
          children: [jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
            style: [styles.menuContainer, {
              backgroundColor: theme.background.white,
              height: height,
              maxWidth: width * 0.8
            }]
          }, {
            children: [jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
              style: [padding.padding.ph20, padding.padding.pv16, dividerStyles]
            }, {
              children: logo.mobileSidebar
            })), jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
              style: [padding.padding.pv24, padding.padding.ph20, dividerStyles]
            }, {
              children: [header && jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
                style: [margin.margin.mb24]
              }, {
                children: header
              })), jsxRuntime.jsx(index$2.SidebarOptions, {
                sections: sections,
                selectedOptionId: selectedOptionId
              }), showWeb3Button && jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
                style: [container.container.fullWidth, container.container.justifyStart, container.container.alignStart, margin.margin.mt24]
              }, {
                children: jsxRuntime.jsx(index.Web3Button, {})
              }))]
            })), jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
              style: [padding.padding.pv24, padding.padding.ph20]
            }, {
              children: jsxRuntime.jsx(nativeBase.FlatList, {
                scrollEnabled: false,
                data: footerOptionsOnMobile,
                keyExtractor: function (item) {
                  return item.title;
                },
                // eslint-disable-next-line react/no-unstable-nested-components
                ItemSeparatorComponent: function () {
                  return jsxRuntime.jsx(nativeBase.View, {
                    style: [margin.margin.mv8]
                  });
                },
                renderItem: function (_a) {
                  var item = _a.item;
                  return jsxRuntime.jsx(FooterOption, tslib_es6.__assign({}, item));
                }
              })
            }))]
          })), jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
            style: [styles.closeIconContainer],
            testID: "iconContainer"
          }, {
            children: jsxRuntime.jsx(index$3.ButtonV2, {
              onPress: handleClose,
              variant: "icon",
              iconVariant: "close",
              title: "close",
              size: "medium",
              iconColor: theme.text.white[100],
              iconBackgroundColor: theme.base.primary[10]
            })
          }))]
        }))
      }))]
    }))]
  }));
};
var FooterOption = function (_a) {
  var title = _a.title,
    link = _a.link;
  var theme = themeV2.useThemeV2();
  var handlePress = function () {
    functions.openLink(link, true);
  };
  return jsxRuntime.jsx(nativeBase.View, {
    children: jsxRuntime.jsx(reactNative.Pressable, tslib_es6.__assign({
      onPress: handlePress
    }, {
      children: jsxRuntime.jsx(index$4.TypographyV2, tslib_es6.__assign({
        variant: "caption2",
        color: theme.text.black[80]
      }, {
        children: title
      }))
    }))
  });
};

exports.MobileSidebar = MobileSidebar;
