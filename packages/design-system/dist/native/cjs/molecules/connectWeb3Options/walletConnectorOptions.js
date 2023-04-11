'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var metamaskLogo = require('../../assets/svg/metamaskLogo.js');
var walletConnectLogo = require('../../assets/svg/walletConnectLogo.js');
var coinbaseWalletLogo = require('../../assets/svg/coinbaseWalletLogo.js');
var fortmaticLogo = require('../../assets/svg/fortmaticLogo.js');
var portisLogo = require('../../assets/svg/portisLogo.js');

var WalletProviderMetaMask = {
  title: 'Metamask',
  logo: jsxRuntime.jsx(metamaskLogo, {})
};
({
  title: 'WalletConnect',
  logo: jsxRuntime.jsx(walletConnectLogo, {})
});
({
  title: 'Coinbase Wallet',
  logo: jsxRuntime.jsx(coinbaseWalletLogo, {})
});
var WalletProviderFortmatic = {
  title: 'Fortmatic',
  logo: jsxRuntime.jsx(fortmaticLogo, {})
};
var WalletProviderPortis = {
  title: 'Portis',
  logo: jsxRuntime.jsx(portisLogo, {})
};
var buildWalletOptionsWeb = function (connectors) {
  return [{
    provider: WalletProviderMetaMask,
    connector: connectors.injected
  }, {
    provider: WalletProviderFortmatic,
    connector: connectors.formatic
  }, {
    provider: WalletProviderPortis,
    connector: connectors.portis
  }];
};
var buildWalletOptionsMobile = function (connectors) {
  return [{
    provider: WalletProviderFortmatic,
    connector: connectors.formatic
  }, {
    provider: WalletProviderPortis,
    connector: connectors.portis
  }];
};

exports.WalletProviderFortmatic = WalletProviderFortmatic;
exports.WalletProviderMetaMask = WalletProviderMetaMask;
exports.WalletProviderPortis = WalletProviderPortis;
exports.buildWalletOptionsMobile = buildWalletOptionsMobile;
exports.buildWalletOptionsWeb = buildWalletOptionsWeb;
