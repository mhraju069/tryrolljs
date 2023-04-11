import { mainnet, polygon, goerli, hardhat, polygonMumbai } from '@wagmi/core/chains';
import { CHAIN_ID_MAIN_NET, CHAIN_ID_POLYGON, CHAIN_ID_GOERLI, CHAIN_ID_HARDHAT, CHAIN_ID_MUMBAI } from '../../web3/connectors.js';

var _a;
var MAP_CHAINS = (_a = {}, _a[CHAIN_ID_MAIN_NET] = mainnet, _a[CHAIN_ID_POLYGON] = polygon, _a[CHAIN_ID_GOERLI] = goerli, _a[CHAIN_ID_HARDHAT] = hardhat, _a[CHAIN_ID_MUMBAI] = polygonMumbai, _a);
var getChainsById = function (chains) {
  var filterdChains = [];
  chains.forEach(function (chain) {
    var validChain = MAP_CHAINS[chain];
    if (validChain) {
      filterdChains.push(validChain);
    }
  });
  return filterdChains;
};

export { getChainsById };
