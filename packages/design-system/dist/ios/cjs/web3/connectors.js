'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injectedConnector = require('@web3-react/injected-connector');
var portisConnector = require('@web3-react/portis-connector');
var fortmaticConnector = require('@web3-react/fortmatic-connector');
var walletconnectConnector = require('@web3-react/walletconnect-connector');

var CHAIN_ID_MAIN_NET = 1;
var CHAIN_ID_POLYGON = 137;
var CHAIN_ID_ROPSTEN = 3;
var CHAIN_ID_GOERLI = 5;
var CHAIN_ID_MUMBAI = 80001;
var CHAIN_ID_HARDHAT = 31337;
var SUPPORTED_CHAIN_IDS = [CHAIN_ID_MAIN_NET, CHAIN_ID_POLYGON, CHAIN_ID_ROPSTEN, CHAIN_ID_GOERLI, CHAIN_ID_MUMBAI, CHAIN_ID_HARDHAT];
var Web3Connectors = /** @class */function () {
  function Web3Connectors(fortmaticApiKey, portisDappID, defaultChainID, supportedChainIDs) {
    if (defaultChainID === void 0) {
      defaultChainID = CHAIN_ID_MAIN_NET;
    }
    if (supportedChainIDs === void 0) {
      supportedChainIDs = SUPPORTED_CHAIN_IDS;
    }
    this.supportedChainIDs = supportedChainIDs;
    this.defaultChainID = defaultChainID;
    this.injected = new injectedConnector.InjectedConnector({
      supportedChainIds: this.supportedChainIDs
    });
    this.formatic = new fortmaticConnector.FortmaticConnector({
      apiKey: fortmaticApiKey,
      chainId: this.defaultChainID
    });
    this.walletConnect = new walletconnectConnector.WalletConnectConnector({
      supportedChainIds: this.supportedChainIDs
    });
    this.portis = new portisConnector.PortisConnector({
      dAppId: portisDappID,
      networks: [CHAIN_ID_MAIN_NET, CHAIN_ID_ROPSTEN]
    });
  }
  return Web3Connectors;
}();

exports.CHAIN_ID_GOERLI = CHAIN_ID_GOERLI;
exports.CHAIN_ID_HARDHAT = CHAIN_ID_HARDHAT;
exports.CHAIN_ID_MAIN_NET = CHAIN_ID_MAIN_NET;
exports.CHAIN_ID_MUMBAI = CHAIN_ID_MUMBAI;
exports.CHAIN_ID_POLYGON = CHAIN_ID_POLYGON;
exports.CHAIN_ID_ROPSTEN = CHAIN_ID_ROPSTEN;
exports.SUPPORTED_CHAIN_IDS = SUPPORTED_CHAIN_IDS;
exports.Web3Connectors = Web3Connectors;
