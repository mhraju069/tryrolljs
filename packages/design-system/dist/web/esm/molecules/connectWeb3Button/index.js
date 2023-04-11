import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { View } from 'native-base';
import 'react';
import { Body } from '../../atoms/typography/index.js';
import { useTheme } from '../../hooks/theme.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useEthAddress } from '../../hooks/web3.js';
import 'react-native-web';
import { Button } from '../../atoms/button/index.js';
import '../../styles/margin.js';
import { padding } from '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import { container } from '../../styles/container.js';
import 'react-native-svg';
import { Spinner } from '../../atoms/spinner/index.js';
import '../../atoms/circleImg/index.js';
import '../../atoms/toast/index.js';
import '@floating-ui/react-dom-interactions';
import { shortenAddress } from '../../utils/web3.js';
import '../../atoms/input/index.js';
import { Dropdown } from '../dropdown/index.js';
import { AccountDropdown } from '../accountDropdown/index.js';

var ConnectWeb3Button = function (_a) {
  var buttonStyle = _a.buttonStyle,
    onPress = _a.onPress,
    activity = _a.activity;
  var address = useEthAddress();
  var theme = useTheme();
  if (activity) {
    return jsx(View, __assign({
      style: [container.alignCenter, container.justifyCenter, container.fullHeight, padding.p4]
    }, {
      children: jsx(Spinner, {})
    }));
  }
  if (address) {
    return jsx(Dropdown, __assign({
      renderDropdown: function () {
        return jsx(AccountDropdown, {
          onSwitchAccounts: onPress
        });
      }
    }, {
      children: jsx(View, __assign({
        style: [container.row, padding.p8, container.borderRadius, {
          backgroundColor: theme.background.page
        }]
      }, {
        children: jsx(Body, {
          children: shortenAddress(address)
        })
      }))
    }));
  }
  return jsx(Button, {
    style: buttonStyle,
    variant: "primary",
    title: "Connect Wallet",
    onPress: onPress
  });
};

export { ConnectWeb3Button };
