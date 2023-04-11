import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { View, Slide, FlatList } from 'native-base';
import { useState } from 'react';
import { StyleSheet, Dimensions, Platform, Pressable } from 'react-native';
import '../../atoms/typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import '../../atoms/button/index.js';
import { ButtonV2 } from '../../atoms/buttonV2/index.js';
import '../../atoms/circleImg/index.js';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import { TypographyV2 } from '../../atoms/typographyV2/index.js';
import { openLink } from '../../utils/functions.js';
import '../../utils/web3.js';
import '@floating-ui/react-native';
import '../../atoms/input/index.js';
import { Icon } from '../../atoms/icon/index.js';
import { SidebarOptions } from '../sidebarOptions/index.js';
import { Web3Button } from '../web3Button/index.js';

var styles = StyleSheet.create({
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
  var _c = useState(false),
    isOpen = _c[0],
    setIsOpen = _c[1];
  var height = Dimensions.get('window').height;
  var width = Dimensions.get('window').width;
  var theme = useThemeV2();
  var handleOpen = function () {
    return setIsOpen(true);
  };
  var handleClose = function () {
    return setIsOpen(false);
  };
  var isNative = Platform.OS !== 'web';
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
  return jsxs(View, __assign({
    style: [container.row, container.alignCenter, container.justifySpaceBetween, padding.pv8, padding.ph20, headerStyles, {
      backgroundColor: theme.background.white,
      zIndex: HEADER_Z_INDEX
    }]
  }, {
    children: [logo.mobileHeader, jsxs(View, __assign({
      style: [container.row, container.alignCenter]
    }, {
      children: [showWeb3Button && jsx(Web3Button, {
        connectedVariant: "avatar"
      }), jsx(Pressable, __assign({
        style: [margin.ml16],
        onPress: handleOpen
      }, {
        children: !isOpen ? jsx(Icon, {
          variant: "menu",
          width: 32,
          height: 32,
          color: theme.base.primary[100]
        }) : jsx(View, {
          width: 8,
          height: 8
        })
      })), jsx(Slide, __assign({
        in: isOpen,
        placement: "left",
        _overlay: {
          isOpen: isOpen,
          style: overlayStyles
        }
      }, {
        children: jsxs(View, __assign({
          testID: "overlay-container",
          style: [styles.container, {
            width: width
          }]
        }, {
          children: [jsxs(View, __assign({
            style: [styles.menuContainer, {
              backgroundColor: theme.background.white,
              height: height,
              maxWidth: width * 0.8
            }]
          }, {
            children: [jsx(View, __assign({
              style: [padding.ph20, padding.pv16, dividerStyles]
            }, {
              children: logo.mobileSidebar
            })), jsxs(View, __assign({
              style: [padding.pv24, padding.ph20, dividerStyles]
            }, {
              children: [header && jsx(View, __assign({
                style: [margin.mb24]
              }, {
                children: header
              })), jsx(SidebarOptions, {
                sections: sections,
                selectedOptionId: selectedOptionId
              }), showWeb3Button && jsx(View, __assign({
                style: [container.fullWidth, container.justifyStart, container.alignStart, margin.mt24]
              }, {
                children: jsx(Web3Button, {})
              }))]
            })), jsx(View, __assign({
              style: [padding.pv24, padding.ph20]
            }, {
              children: jsx(FlatList, {
                scrollEnabled: false,
                data: footerOptionsOnMobile,
                keyExtractor: function (item) {
                  return item.title;
                },
                // eslint-disable-next-line react/no-unstable-nested-components
                ItemSeparatorComponent: function () {
                  return jsx(View, {
                    style: [margin.mv8]
                  });
                },
                renderItem: function (_a) {
                  var item = _a.item;
                  return jsx(FooterOption, __assign({}, item));
                }
              })
            }))]
          })), jsx(View, __assign({
            style: [styles.closeIconContainer],
            testID: "iconContainer"
          }, {
            children: jsx(ButtonV2, {
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
  var theme = useThemeV2();
  var handlePress = function () {
    openLink(link, true);
  };
  return jsx(View, {
    children: jsx(Pressable, __assign({
      onPress: handlePress
    }, {
      children: jsx(TypographyV2, __assign({
        variant: "caption2",
        color: theme.text.black[80]
      }, {
        children: title
      }))
    }))
  });
};

export { MobileSidebar };
