import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { Web3Provider as Web3Provider$1 } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3ConnectorProvider } from '../web3Connectors/index.js';

var getDefaultLibrary = function (provider) {
  return new Web3Provider$1(provider);
};
var Web3Provider = function (_a) {
  var children = _a.children,
    getLibrary = _a.getLibrary,
    fortmaticApiKey = _a.fortmaticApiKey,
    portisDappID = _a.portisDappID,
    defaultChainID = _a.defaultChainID,
    supportedChainIDs = _a.supportedChainIDs,
    eagerConnect = _a.eagerConnect;
  return jsx(Web3ReactProvider, __assign({
    getLibrary: getLibrary || getDefaultLibrary
  }, {
    children: jsx(Web3ConnectorProvider, __assign({
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

export { Web3Provider };
