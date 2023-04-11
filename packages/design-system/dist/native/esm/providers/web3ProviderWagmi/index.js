import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { w3mProvider, w3mConnectors, EthereumClient } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { Platform } from 'react-native';
import { SUPPORTED_CHAIN_IDS } from '../../web3/connectors.js';
import { getChainsById } from './utils.js';

var Web3ProviderNativeWagmi = function (_a) {
  var children = _a.children;
  return jsx(Fragment, {
    children: children
  });
};
var Web3ProviderWebWagmi = function (_a) {
  var supportedChainIds = _a.supportedChainIds,
    wallectConnectProjectId = _a.wallectConnectProjectId,
    alchemyApiKey = _a.alchemyApiKey,
    variant = _a.variant,
    children = _a.children;
  var config = useMemo(function () {
    var chains = getChainsById(supportedChainIds !== null && supportedChainIds !== void 0 ? supportedChainIds : SUPPORTED_CHAIN_IDS);
    if (variant === 'web3Modal') {
      return configureChains(chains, [w3mProvider({
        projectId: wallectConnectProjectId
      })]);
    }
    var providers = alchemyApiKey ? [alchemyProvider({
      apiKey: alchemyApiKey
    }), publicProvider()] : [publicProvider()];
    return configureChains(chains, providers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var connectors = useMemo(function () {
    if (variant === 'web3Modal') {
      return w3mConnectors({
        projectId: wallectConnectProjectId,
        version: 1,
        chains: config.chains
      });
    }
    if (variant === 'walletConnect') {
      return [new InjectedConnector({
        chains: config.chains
      }), new WalletConnectConnector({
        chains: config.chains,
        options: {
          showQrModal: true,
          projectId: wallectConnectProjectId
        }
      })];
    }
    return [new InjectedConnector({
      chains: config.chains
    })];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var client = useMemo(function () {
    return createClient({
      autoConnect: true,
      provider: config.provider,
      webSocketProvider: config.webSocketProvider,
      connectors: connectors
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var ethereumClient = new EthereumClient(client, config.chains);
  return jsxs(Fragment, {
    children: [jsx(WagmiConfig, __assign({
      client: client
    }, {
      children: children
    })), variant === 'web3Modal' && jsx(Web3Modal, {
      projectId: wallectConnectProjectId,
      ethereumClient: ethereumClient
    })]
  });
};
var Web3ProviderWagmi = Platform.select({
  web: Web3ProviderWebWagmi,
  default: Web3ProviderNativeWagmi
});

export { Web3ProviderWagmi };
