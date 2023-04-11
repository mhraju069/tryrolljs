import { InjectedConnector } from '@web3-react/injected-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

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
    this.injected = new InjectedConnector({
      supportedChainIds: this.supportedChainIDs
    });
    this.formatic = new FortmaticConnector({
      apiKey: fortmaticApiKey,
      chainId: this.defaultChainID
    });
    this.walletConnect = new WalletConnectConnector({
      supportedChainIds: this.supportedChainIDs
    });
    this.portis = new PortisConnector({
      dAppId: portisDappID,
      networks: [CHAIN_ID_MAIN_NET, CHAIN_ID_ROPSTEN]
    });
  }
  return Web3Connectors;
}();

export { CHAIN_ID_GOERLI, CHAIN_ID_HARDHAT, CHAIN_ID_MAIN_NET, CHAIN_ID_MUMBAI, CHAIN_ID_POLYGON, CHAIN_ID_ROPSTEN, SUPPORTED_CHAIN_IDS, Web3Connectors };
