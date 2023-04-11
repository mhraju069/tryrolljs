'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
require('react');
require('react-native-web');
require('../../styles/margin.js');
require('../../styles/padding.js');
require('../../styles/spacing.js');
require('../../styles/text.js');
require('../../styles/container.js');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
require('native-base');
require('@ethersproject/providers');
require('@web3-react/core');
require('@web3-react/injected-connector');
require('@web3-react/portis-connector');
require('@web3-react/fortmatic-connector');
require('@web3-react/walletconnect-connector');
var index = require('../../providers/web3ProviderWagmi/index.js');

var withWeb3ProviderWagmi = function (component) {
  return jsxRuntime.jsx(index.Web3ProviderWagmi, tslib_es6.__assign({
    variant: "injected"
  }, {
    children: component
  }));
};

module.exports = withWeb3ProviderWagmi;
