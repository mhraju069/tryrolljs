import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { View, Pressable } from 'native-base';
import SvgLogo from '../../assets/svg/logo.js';
import SvgDiscord from '../../assets/svg/discord.js';
import SvgInsta from '../../assets/svg/insta.js';
import SvgTwitter from '../../assets/svg/twitter.js';
import 'react';
import { SubHeader, Header } from '../../atoms/typography/index.js';
import { useTheme } from '../../hooks/theme.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import 'react-native-web';
import '../../atoms/button/index.js';
import { margin } from '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import 'react-native-svg';
import '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '@floating-ui/react-dom-interactions';
import { openLink } from '../../utils/functions.js';
import '../../utils/web3.js';
import '../../atoms/input/index.js';
import { supportEmail, blogUrl, faqUrl, stakingTermsUrl, resourceCenterUrl, discordInviteUrl, twitterUrl, instaUrl } from '../../constants/index.js';

var icons = [{
  Icon: SvgDiscord,
  url: discordInviteUrl
}, {
  Icon: SvgTwitter,
  url: twitterUrl
}, {
  Icon: SvgInsta,
  url: instaUrl
}];
var Footer = function () {
  var theme = useTheme();
  return jsx(View, __assign({
    style: [container.fullWidth, {
      backgroundColor: theme.background.lowLight
    }]
  }, {
    children: jsxs(View, __assign({
      style: [container.row, container.alignSelfCenter, margin.mt40, margin.mb64]
    }, {
      children: [jsxs(View, __assign({
        style: margin.mtauto
      }, {
        children: [jsx(SvgLogo, {}), jsx(SubHeader, __assign({
          color: theme.background.primary,
          style: margin.mt16,
          onPress: function () {
            return openLink("mailto:".concat(supportEmail), true);
          }
        }, {
          children: "support@tryroll.com"
        }))]
      })), jsxs(View, __assign({
        style: margin.ml128
      }, {
        children: [jsx(Header, __assign({
          color: theme.background.primary,
          weight: "bold"
        }, {
          children: "Company"
        })), jsx(SubHeader, __assign({
          color: theme.background.primary,
          style: margin.mv8,
          onPress: function () {
            return openLink(blogUrl);
          }
        }, {
          children: "Blog"
        })), jsx(SubHeader, __assign({
          color: theme.background.primary,
          onPress: function () {
            return openLink(faqUrl, true);
          }
        }, {
          children: "FAQ"
        }))]
      })), jsxs(View, __assign({
        style: margin.ml128
      }, {
        children: [jsx(Header, __assign({
          color: theme.background.primary,
          weight: "bold"
        }, {
          children: "Resources"
        })), jsx(SubHeader, __assign({
          color: theme.background.primary,
          style: margin.mv8,
          onPress: function () {
            return openLink(stakingTermsUrl, true);
          }
        }, {
          children: "Protocol Terms"
        })), jsx(SubHeader, __assign({
          color: theme.background.primary,
          onPress: function () {
            return openLink(resourceCenterUrl, true);
          }
        }, {
          children: "Resource Center"
        }))]
      })), jsxs(View, __assign({
        style: margin.ml128
      }, {
        children: [jsx(Header, __assign({
          color: theme.background.primary,
          weight: "bold"
        }, {
          children: "Connect with us"
        })), jsx(View, __assign({
          style: [container.row, margin.mt16]
        }, {
          children: icons.map(function (_a) {
            var Icon = _a.Icon,
              url = _a.url;
            return jsx(Pressable, __assign({
              onPress: function () {
                return openLink(url, true);
              },
              style: margin.mr24
            }, {
              children: jsx(Icon, {})
            }), url);
          })
        }))]
      }))]
    }))
  }));
};

export { Footer };
