import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { View } from 'native-base';
import { Anchor } from '../../atoms/anchor/index.js';
import '../../atoms/button/index.js';
import 'react';
import 'react-native';
import { useTheme } from '../../hooks/theme.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useEthAddress } from '../../hooks/web3.js';
import { makeStyles } from '../../styles/utils.js';
import { margin } from '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import 'react-native-svg';
import '../../atoms/circleImg/index.js';
import { Body } from '../../atoms/typography/index.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import { shortenAddress, etherscanAccountUrl } from '../../utils/web3.js';
import '@floating-ui/react-native';
import '../../atoms/input/index.js';
import SvgCopy from '../../assets/svg/copy.js';
import SvgWallet from '../../assets/svg/wallet.js';
import SvgLink from '../../assets/svg/link.js';

var styles = makeStyles({
  container: {
    minWidth: 320
  },
  address: {
    maxWidth: 150
  }
});
var SwitchAccountLink = function (_a) {
  var icon = _a.icon,
    title = _a.title,
    onPress = _a.onPress,
    href = _a.href;
  var theme = useTheme();
  return jsx(Anchor, __assign({
    target: "_blank",
    href: href,
    onPress: onPress
  }, {
    children: jsxs(View, __assign({
      style: [container.row, container.alignCenter, margin.mh8]
    }, {
      children: [icon, jsx(Body, __assign({
        onPress: onPress,
        style: margin.ml4,
        color: theme.text.highlight
      }, {
        children: title
      }))]
    }))
  }));
};
var AccountDropdown = function (_a) {
  var onSwitchAccounts = _a.onSwitchAccounts;
  var theme = useTheme();
  var address = useEthAddress();
  return jsxs(View, __assign({
    style: [padding.p8, styles.container]
  }, {
    children: [jsx(Body, __assign({
      color: theme.text.secondary
    }, {
      children: "Connected with MetaMask"
    })), jsxs(View, __assign({
      style: [container.row, styles.address, padding.p8, container.borderRadius, margin.mv8, {
        backgroundColor: theme.background.page
      }]
    }, {
      children: [jsx(Body, __assign({
        weight: "bold",
        style: margin.mr8
      }, {
        children: shortenAddress(address || '')
      })), jsx(SvgCopy, {})]
    })), jsxs(View, __assign({
      style: container.row
    }, {
      children: [jsx(SwitchAccountLink, {
        onPress: onSwitchAccounts,
        icon: jsx(SvgWallet, {}),
        title: "Switch Accounts"
      }), jsx(SwitchAccountLink, {
        icon: jsx(SvgLink, {}),
        title: "View on Etherscan",
        href: etherscanAccountUrl(address || '')
      })]
    }))]
  }));
};

export { AccountDropdown };
