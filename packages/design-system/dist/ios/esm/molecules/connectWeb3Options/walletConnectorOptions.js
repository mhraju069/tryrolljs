import { jsx } from 'react/jsx-runtime';
import SvgMetamaskLogo from '../../assets/svg/metamaskLogo.js';
import SvgWalletConnectLogo from '../../assets/svg/walletConnectLogo.js';
import SvgCoinbaseWalletLogo from '../../assets/svg/coinbaseWalletLogo.js';
import SvgFortmaticLogo from '../../assets/svg/fortmaticLogo.js';
import SvgPortisLogo from '../../assets/svg/portisLogo.js';

var WalletProviderMetaMask = {
  title: 'Metamask',
  logo: jsx(SvgMetamaskLogo, {})
};
({
  title: 'WalletConnect',
  logo: jsx(SvgWalletConnectLogo, {})
});
({
  title: 'Coinbase Wallet',
  logo: jsx(SvgCoinbaseWalletLogo, {})
});
var WalletProviderFortmatic = {
  title: 'Fortmatic',
  logo: jsx(SvgFortmaticLogo, {})
};
var WalletProviderPortis = {
  title: 'Portis',
  logo: jsx(SvgPortisLogo, {})
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

export { WalletProviderFortmatic, WalletProviderMetaMask, WalletProviderPortis, buildWalletOptionsMobile, buildWalletOptionsWeb };
