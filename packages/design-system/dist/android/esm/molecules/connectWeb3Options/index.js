import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';
import { View, Pressable } from 'native-base';
import SvgClose from '../../assets/svg/close.js';
import { lightestGray } from '../../styles/colors.js';
import { makeStyles } from '../../styles/utils.js';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import { text } from '../../styles/text.js';
import { container } from '../../styles/container.js';
import { Anchor } from '../../atoms/anchor/index.js';
import '../../atoms/button/index.js';
import 'react-native';
import { useTheme } from '../../hooks/theme.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useWeb3Conntectors } from '../../hooks/web3.js';
import 'react-native-svg';
import '../../atoms/circleImg/index.js';
import { SubHeader, Body } from '../../atoms/typography/index.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import '../../utils/web3.js';
import '@floating-ui/react-native';
import '../../atoms/input/index.js';
import { stakingTermsUrl } from '../../constants/index.js';
import { buildWalletOptionsMobile, buildWalletOptionsWeb } from './walletConnectorOptions.js';

var styles = makeStyles({
  wrapper: {
    minWidth: 350,
    maxWidth: 600
  },
  option: {
    borderWidth: 1
  },
  termsAndConditions: {
    width: '80%'
  }
});
var ConnectWeb3Options = function (_a) {
  var onSelect = _a.onSelect,
    onClose = _a.onClose,
    mobile = _a.mobile;
  var theme = useTheme();
  var _b = useState(null),
    selectedIdx = _b[0],
    setSelectedIdx = _b[1];
  var _c = useWeb3Conntectors(),
    connectors = _c.connectors,
    handleConnect = _c.handleConnect;
  var walletOptions = useMemo(function () {
    return mobile ? buildWalletOptionsMobile(connectors) : buildWalletOptionsWeb(connectors);
  }, [connectors, mobile]);
  var _select = function (connector, idx) {
    setSelectedIdx(idx);
    handleConnect(connector);
    onSelect && onSelect();
  };
  return jsxs(View, __assign({
    style: [styles.wrapper, container.borderRadiusXL, {
      backgroundColor: theme.background.primary
    }]
  }, {
    children: [jsxs(View, __assign({
      style: [container.row, container.justifySpaceBetween, padding.p16]
    }, {
      children: [jsx(SubHeader, __assign({
        weight: "bold"
      }, {
        children: "Connect Wallet"
      })), jsx(Pressable, __assign({
        onPress: onClose
      }, {
        children: jsx(SvgClose, {})
      }))]
    })), jsxs(View, __assign({
      style: [container.alignCenter, container.borderRadius, padding.p16, {
        backgroundColor: theme.background.primary
      }]
    }, {
      children: [walletOptions.map(function (o, i) {
        return jsx(ConnectWalletOption, {
          active: i === selectedIdx,
          title: o.provider.title,
          logo: o.provider.logo,
          onPress: function () {
            return _select(o.connector, i);
          }
        }, i);
      }), jsx(View, __assign({
        style: [container.justifyCenter, styles.termsAndConditions]
      }, {
        children: jsxs(Body, __assign({
          style: text.center
        }, {
          children: ["By connecting, you accept the", ' ', jsx(Anchor, __assign({
            href: stakingTermsUrl
          }, {
            children: "Terms of Service"
          })), " for using the Roll protocol"]
        }))
      }))]
    }))]
  }));
};
var ConnectWalletOption = function (_a) {
  var title = _a.title,
    logo = _a.logo,
    active = _a.active,
    onPress = _a.onPress;
  var theme = useTheme();
  return jsxs(Pressable, __assign({
    onPress: onPress,
    style: [container.row, container.justifySpaceBetween, container.borderRadiusSM, padding.p16, margin.mb8, container.fullWidth, styles.option, {
      borderColor: active ? theme.background.highlight : lightestGray
    }]
  }, {
    children: [jsx(SubHeader, {
      children: title
    }), logo]
  }));
};

export { ConnectWeb3Options };
