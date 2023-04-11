import { __assign, __awaiter, __generator } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useWeb3Modal } from '@web3modal/react';
import { Pressable } from 'react-native';
import 'native-base';
import 'react';
import '../../atoms/typography/index.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import '@web3-react/core';
import '../../atoms/button/index.js';
import { ButtonV2 } from '../../atoms/buttonV2/index.js';
import { CircleImg } from '../../atoms/circleImg/index.js';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import '../../styles/container.js';
import '../../atoms/toast/index.js';
import '../../atoms/tooltip/index.js';
import { shortenAddress } from '../../utils/web3.js';
import '@floating-ui/react-native';
import '../../atoms/input/index.js';
import { Icon } from '../../atoms/icon/index.js';
import { useEthAddress } from '../../hooks/web3Wagmi.js';

var Web3Button = function (_a) {
  var _b = _a.connectedVariant,
    connectedVariant = _b === void 0 ? 'button' : _b;
  var _c = useWeb3Modal(),
    isOpen = _c.isOpen,
    open = _c.open;
  var userAddress = useEthAddress();
  var handleConnect = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (isOpen) return [2 /*return*/];
            return [4 /*yield*/, open({
              route: userAddress ? 'Account' : 'ConnectWallet'
            })];
          case 1:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  };

  var title = userAddress ? shortenAddress(userAddress) : 'Connect Wallet';
  var icon = userAddress ? jsx(CircleImg, {
    size: 16
  }) : jsx(Icon, {
    variant: "wallet"
  });
  if (userAddress && connectedVariant === 'avatar') {
    return jsx(Pressable, __assign({
      onPress: handleConnect
    }, {
      children: jsx(CircleImg, {
        size: 40
      })
    }));
  }
  // TODO: add details variant once we have the component ready
  return jsx(ButtonV2, {
    size: "small",
    variant: "tertiary",
    title: title,
    icon: icon,
    isDisabled: isOpen,
    onPress: handleConnect
  });
};

export { Web3Button };
