'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var nativeBase = require('native-base');
var logo = require('../../assets/svg/logo.js');
var discord = require('../../assets/svg/discord.js');
var insta = require('../../assets/svg/insta.js');
var twitter = require('../../assets/svg/twitter.js');
require('react');
var index = require('../../atoms/typography/index.js');
var theme = require('../../hooks/theme.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('@web3-react/core');
require('react-native');
require('../../atoms/button/index.js');
var margin = require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
var container = require('../../styles/container.js');
require('react-native-svg');
require('../../atoms/circleImg/index.js');
require('../../atoms/toast/index.js');
require('../../atoms/tooltip/index.js');
var functions = require('../../utils/functions.js');
require('../../utils/web3.js');
require('@floating-ui/react-native');
require('../../atoms/input/index.js');
var index$1 = require('../../constants/index.js');

var icons = [{
  Icon: discord,
  url: index$1.discordInviteUrl
}, {
  Icon: twitter,
  url: index$1.twitterUrl
}, {
  Icon: insta,
  url: index$1.instaUrl
}];
var Footer = function () {
  var theme$1 = theme.useTheme();
  return jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
    style: [container.container.fullWidth, {
      backgroundColor: theme$1.background.lowLight
    }]
  }, {
    children: jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
      style: [container.container.row, container.container.alignSelfCenter, margin.margin.mt40, margin.margin.mb64]
    }, {
      children: [jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
        style: margin.margin.mtauto
      }, {
        children: [jsxRuntime.jsx(logo, {}), jsxRuntime.jsx(index.SubHeader, tslib_es6.__assign({
          color: theme$1.background.primary,
          style: margin.margin.mt16,
          onPress: function () {
            return functions.openLink("mailto:".concat(index$1.supportEmail), true);
          }
        }, {
          children: "support@tryroll.com"
        }))]
      })), jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
        style: margin.margin.ml128
      }, {
        children: [jsxRuntime.jsx(index.Header, tslib_es6.__assign({
          color: theme$1.background.primary,
          weight: "bold"
        }, {
          children: "Company"
        })), jsxRuntime.jsx(index.SubHeader, tslib_es6.__assign({
          color: theme$1.background.primary,
          style: margin.margin.mv8,
          onPress: function () {
            return functions.openLink(index$1.blogUrl);
          }
        }, {
          children: "Blog"
        })), jsxRuntime.jsx(index.SubHeader, tslib_es6.__assign({
          color: theme$1.background.primary,
          onPress: function () {
            return functions.openLink(index$1.faqUrl, true);
          }
        }, {
          children: "FAQ"
        }))]
      })), jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
        style: margin.margin.ml128
      }, {
        children: [jsxRuntime.jsx(index.Header, tslib_es6.__assign({
          color: theme$1.background.primary,
          weight: "bold"
        }, {
          children: "Resources"
        })), jsxRuntime.jsx(index.SubHeader, tslib_es6.__assign({
          color: theme$1.background.primary,
          style: margin.margin.mv8,
          onPress: function () {
            return functions.openLink(index$1.stakingTermsUrl, true);
          }
        }, {
          children: "Protocol Terms"
        })), jsxRuntime.jsx(index.SubHeader, tslib_es6.__assign({
          color: theme$1.background.primary,
          onPress: function () {
            return functions.openLink(index$1.resourceCenterUrl, true);
          }
        }, {
          children: "Resource Center"
        }))]
      })), jsxRuntime.jsxs(nativeBase.View, tslib_es6.__assign({
        style: margin.margin.ml128
      }, {
        children: [jsxRuntime.jsx(index.Header, tslib_es6.__assign({
          color: theme$1.background.primary,
          weight: "bold"
        }, {
          children: "Connect with us"
        })), jsxRuntime.jsx(nativeBase.View, tslib_es6.__assign({
          style: [container.container.row, margin.margin.mt16]
        }, {
          children: icons.map(function (_a) {
            var Icon = _a.Icon,
              url = _a.url;
            return jsxRuntime.jsx(nativeBase.Pressable, tslib_es6.__assign({
              onPress: function () {
                return functions.openLink(url, true);
              },
              style: margin.margin.mr24
            }, {
              children: jsxRuntime.jsx(Icon, {})
            }), url);
          })
        }))]
      }))]
    }))
  }));
};

exports.Footer = Footer;
