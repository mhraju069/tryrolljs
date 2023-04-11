'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
require('../../context/modal.js');
require('../../context/theme.js');
require('../../context/web3.js');
require('../../context/themeV2.js');
var web3 = require('../../hooks/web3.js');
require('react-native-web');
var connectors = require('../../web3/connectors.js');
var index = require('../banner/index.js');

var isSupportedNetwork = function (supportedChainIDs, chainID) {
  return supportedChainIDs.findIndex(function (supportedChainID) {
    return supportedChainID === chainID;
  }) !== -1;
};
var InvalidNetworkBanner = function (_a) {
  var title = _a.title,
    _b = _a.supportedChainIDs,
    supportedChainIDs = _b === void 0 ? connectors.SUPPORTED_CHAIN_IDS : _b;
  var chainID = web3.useChainID();
  if (!chainID || isSupportedNetwork(supportedChainIDs, chainID)) {
    return null;
  }
  return jsxRuntime.jsx(index.Banner, {
    title: title !== null && title !== void 0 ? title : 'You are connected to the wrong network.',
    variant: "warning"
  });
};

exports.InvalidNetworkBanner = InvalidNetworkBanner;
