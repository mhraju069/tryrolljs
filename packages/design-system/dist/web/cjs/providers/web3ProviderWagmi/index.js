'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ethereum = require('@web3modal/ethereum');
var react = require('@web3modal/react');
var wagmi = require('wagmi');
var injected = require('wagmi/connectors/injected');
var walletConnect = require('wagmi/connectors/walletConnect');
var _public = require('wagmi/providers/public');
var alchemy = require('wagmi/providers/alchemy');
var reactNativeWeb = require('react-native-web');
var connectors = require('../../web3/connectors.js');
var utils = require('./utils.js');

var Web3ProviderNativeWagmi = function (_a) {
  var children = _a.children;
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: children
  });
};
var Web3ProviderWebWagmi = function (_a) {
  var supportedChainIds = _a.supportedChainIds,
    wallectConnectProjectId = _a.wallectConnectProjectId,
    alchemyApiKey = _a.alchemyApiKey,
    variant = _a.variant,
    children = _a.children;
  var config = React.useMemo(function () {
    var chains = utils.getChainsById(supportedChainIds !== null && supportedChainIds !== void 0 ? supportedChainIds : connectors.SUPPORTED_CHAIN_IDS);
    if (variant === 'web3Modal') {
      return wagmi.configureChains(chains, [ethereum.w3mProvider({
        projectId: wallectConnectProjectId
      })]);
    }
    var providers = alchemyApiKey ? [alchemy.alchemyProvider({
      apiKey: alchemyApiKey
    }), _public.publicProvider()] : [_public.publicProvider()];
    return wagmi.configureChains(chains, providers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var connectors$1 = React.useMemo(function () {
    if (variant === 'web3Modal') {
      return ethereum.w3mConnectors({
        projectId: wallectConnectProjectId,
        version: 1,
        chains: config.chains
      });
    }
    if (variant === 'walletConnect') {
      return [new injected.InjectedConnector({
        chains: config.chains
      }), new walletConnect.WalletConnectConnector({
        chains: config.chains,
        options: {
          showQrModal: true,
          projectId: wallectConnectProjectId
        }
      })];
    }
    return [new injected.InjectedConnector({
      chains: config.chains
    })];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var client = React.useMemo(function () {
    return wagmi.createClient({
      autoConnect: true,
      provider: config.provider,
      webSocketProvider: config.webSocketProvider,
      connectors: connectors$1
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var ethereumClient = new ethereum.EthereumClient(client, config.chains);
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsx(wagmi.WagmiConfig, tslib_es6.__assign({
      client: client
    }, {
      children: children
    })), variant === 'web3Modal' && jsxRuntime.jsx(react.Web3Modal, {
      projectId: wallectConnectProjectId,
      ethereumClient: ethereumClient
    })]
  });
};
var Web3ProviderWagmi = reactNativeWeb.Platform.select({
  web: Web3ProviderWebWagmi,
  default: Web3ProviderNativeWagmi
});

exports.Web3ProviderWagmi = Web3ProviderWagmi;
