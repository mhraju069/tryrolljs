import { createContext } from 'react';
import { Web3Connectors } from '../web3/connectors.js';

var Web3ConnectorsContext = createContext({
  connectors: new Web3Connectors('', ''),
  setConnectors: function () {
    return null;
  },
  handleConnect: function (_) {
    return null;
  },
  isActivating: false,
  eagerConnect: function () {
    return null;
  }
});

export { Web3ConnectorsContext };
