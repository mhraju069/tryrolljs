import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { StyleSheet, View, Pressable } from 'react-native-web';
import { useBreakpointValue } from 'native-base';
import { useCallback } from 'react';
import SvgLogoIso from '../../assets/svg/logo-iso.js';
import { twitterUrl, discordInviteUrl, instaUrl } from '../../constants/index.js';
import { openLink } from '../../utils/functions.js';
import '../../utils/web3.js';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useThemeV2 } from '../../hooks/themeV2.js';
import '@web3-react/core';
import { TypographyV2 } from '../../atoms/typographyV2/index.js';

var FooterOption = function (_a) {
  var title = _a.title,
    link = _a.link,
    _b = _a.isLast,
    isLast = _b === void 0 ? false : _b;
  var theme = useThemeV2();
  var handlePress = useCallback(function () {
    openLink(link, true);
  }, [link]);
  var containerStlyes = useBreakpointValue({
    base: [!isLast && margin.mb16],
    md: [!isLast && margin.mr16]
  });
  return jsx(View, __assign({
    style: containerStlyes
  }, {
    children: jsx(Pressable, __assign({
      onPress: handlePress
    }, {
      children: jsx(TypographyV2, __assign({
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
  link: twitterUrl
}, {
  title: 'Discord',
  link: discordInviteUrl
}, {
  title: 'Instagram',
  link: instaUrl
}];
var styles = StyleSheet.create({
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
  var theme = useThemeV2();
  var contentResponsiveStyles = useBreakpointValue({
    md: [container.alignCenter, container.row]
  });
  var linksContainerResponsiveStyles = useBreakpointValue({
    base: [container.justifyStart, margin.mt16],
    md: [container.justifySpaceBetween, container.flex1, margin.ml16, {
      marginTop: 0
    }]
  });
  var socialContainerResponsiveStyles = useBreakpointValue({
    md: [container.row]
  });
  var navigationContainerResponsiveStyles = useBreakpointValue({
    base: [margin.ml40],
    md: [container.row, {
      marginLeft: 0
    }]
  });
  var tradeMarkResponsiveStyles = useBreakpointValue({
    base: [margin.mt16],
    md: [{
      marginTop: 0
    }, margin.ml16]
  });
  return jsx(View, __assign({
    style: [container.fullWidth, padding.ph20, padding.pt16, styles.mainContainer]
  }, {
    children: jsxs(View, __assign({
      style: [container.fullWidth, padding.pt16, styles.contentWrapper, contentResponsiveStyles, {
        borderTopColor: theme.background.silver
      }]
    }, {
      children: [jsx(SvgLogoIso, {}), jsxs(View, __assign({
        style: [styles.linksContainer, linksContainerResponsiveStyles]
      }, {
        children: [jsx(View, __assign({
          style: [socialContainerResponsiveStyles]
        }, {
          children: social.map(function (item, index) {
            return jsx(FooterOption, __assign({
              isLast: index === social.length - 1
            }, item), item.title);
          })
        })), jsx(View, __assign({
          style: [navigationContainerResponsiveStyles]
        }, {
          children: navigation.map(function (item, index) {
            return jsx(FooterOption, __assign({
              isLast: index === social.length - 1
            }, item), item.title);
          })
        }))]
      })), jsx(View, __assign({
        style: [tradeMarkResponsiveStyles]
      }, {
        children: jsxs(TypographyV2, __assign({
          variant: "text4",
          color: theme.text.black[30]
        }, {
          children: ["\u00A9", new Date().getFullYear(), " Roll"]
        }))
      }))]
    }))
  }));
};

export { FooterV2 };
