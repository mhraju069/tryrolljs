'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var providers = require('@ethersproject/providers');
var core = require('@web3-react/core');
var index = require('../web3Connectors/index.js');

var getDefaultLibrary = function (provider) {
  return new providers.Web3Provider(provider);
};
var Web3Provider = function (_a) {
  var children = _a.children,
    getLibrary = _a.getLibrary,
    fortmaticApiKey = _a.fortmaticApiKey,
    portisDappID = _a.portisDappID,
    defaultChainID = _a.defaultChainID,
    supportedChainIDs = _a.supportedChainIDs,
    eagerConnect = _a.eagerConnect;
  return jsxRuntime.jsx(core.Web3ReactProvider, tslib_es6.__assign({
    getLibrary: getLibrary || getDefaultLibrary
  }, {
    children: jsxRuntime.jsx(index.Web3ConnectorProvider, tslib_es6.__assign({
      eagerConnect: eagerConnect,
      fortmaticApiKey: fortmaticApiKey,
      portisDappID: portisDappID,
      defaultChainID: defaultChainID,
      supportedChainIDs: supportedChainIDs
    }, {
      children: children
    }))
  }));
};

exports.Web3Provider = Web3Provider;
