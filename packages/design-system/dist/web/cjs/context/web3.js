'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var connectors = require('../web3/connectors.js');

var Web3ConnectorsContext = React.createContext({
  connectors: new connectors.Web3Connectors('', ''),
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

exports.Web3ConnectorsContext = Web3ConnectorsContext;
