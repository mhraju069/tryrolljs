'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chains = require('@wagmi/core/chains');
var connectors = require('../../web3/connectors.js');

var _a;
var MAP_CHAINS = (_a = {}, _a[connectors.CHAIN_ID_MAIN_NET] = chains.mainnet, _a[connectors.CHAIN_ID_POLYGON] = chains.polygon, _a[connectors.CHAIN_ID_GOERLI] = chains.goerli, _a[connectors.CHAIN_ID_HARDHAT] = chains.hardhat, _a[connectors.CHAIN_ID_MUMBAI] = chains.polygonMumbai, _a);
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

exports.getChainsById = getChainsById;
