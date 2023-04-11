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
var index = require('../../providers/web3/index.js');
require('../../providers/web3ProviderWagmi/index.js');
require('@web3-react/core');
require('@web3-react/injected-connector');
require('@web3-react/portis-connector');
require('@web3-react/fortmatic-connector');
require('@web3-react/walletconnect-connector');

var withWeb3Provider = function (component) {
  return jsxRuntime.jsx(index.Web3Provider, tslib_es6.__assign({
    fortmaticApiKey: "",
    portisDappID: ""
  }, {
    children: component
  }));
};

module.exports = withWeb3Provider;
