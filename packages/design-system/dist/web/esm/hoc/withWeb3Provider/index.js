import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import 'react';
import 'react-native-web';
import '../../styles/margin.js';
import '../../styles/padding.js';
import '../../styles/spacing.js';
import '../../styles/text.js';
import '../../styles/container.js';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import 'native-base';
import { Web3Provider } from '../../providers/web3/index.js';
import '../../providers/web3ProviderWagmi/index.js';
import '@web3-react/core';
import '@web3-react/injected-connector';
import '@web3-react/portis-connector';
import '@web3-react/fortmatic-connector';
import '@web3-react/walletconnect-connector';

var withWeb3Provider = function (component) {
  return jsx(Web3Provider, __assign({
    fortmaticApiKey: "",
    portisDappID: ""
  }, {
    children: component
  }));
};

export { withWeb3Provider as default };
