'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@web3-react/core');
var React = require('react');
require('../context/modal.js');
require('../context/theme.js');
var web3 = require('../context/web3.js');
require('../context/themeV2.js');

var ethEventChainIDChanged = 'chainIdChanged';
var ethEventChainChanged = 'chainChanged';
var ethEventAccountsChange = 'accountsChanged';
var useInactiveListener = function (connectors, onChangeChain, onChangeAccount) {
  var _a = core.useWeb3React(),
    error = _a.error,
    activate = _a.activate;
  var handleReActivate = React.useCallback(function (message, first) {
    first();
    if (!connectors) return;
    activate(connectors.injected, undefined, true).catch(function (err) {
      console.error(message, err);
    });
  }, [activate, connectors]);
  var _onChangeChain = React.useCallback(function () {
    handleReActivate('failed to re-activate after network changed', function () {
      return onChangeChain && onChangeChain;
    });
  }, [handleReActivate, onChangeChain]);
  var _onChangeAccount = React.useCallback(function (accounts) {
    accounts.length > 0 && handleReActivate('failed to re-active after account changed', function () {
      return onChangeAccount && onChangeAccount();
    });
  }, [handleReActivate, onChangeAccount]);
  React.useEffect(function () {
    // @ts-ignore
    var ethereum = window.ethereum;
    if (ethereum && ethereum.on && !error) {
      ethereum.on(ethEventChainIDChanged, _onChangeChain);
      ethereum.on(ethEventChainChanged, _onChangeChain);
      ethereum.on(ethEventAccountsChange, _onChangeAccount);
      return function () {
        if (!ethereum || !ethereum.removeListener) return;
        ethereum.removeListener(ethEventChainIDChanged, _onChangeChain);
        ethereum.removeListener(ethEventChainChanged, _onChangeChain);
        ethereum.removeListener(ethEventAccountsChange, _onChangeAccount);
      };
    }
  }, [error, handleReActivate, _onChangeAccount, _onChangeChain]);
};
var useLibrary = function () {
  var library = core.useWeb3React().library;
  return library;
};
var useSigner = function () {
  var library = useLibrary();
  var signer = React.useMemo(function () {
    return library ? library.getSigner() : undefined;
  }, [library]);
  return signer;
};
var useEthAddress = function () {
  var account = core.useWeb3React().account;
  return account;
};
var useChainID = function () {
  var chainId = core.useWeb3React().chainId;
  return chainId;
};
var useWeb3Conntectors = function () {
  return React.useContext(web3.Web3ConnectorsContext);
};

exports.useChainID = useChainID;
exports.useEthAddress = useEthAddress;
exports.useInactiveListener = useInactiveListener;
exports.useLibrary = useLibrary;
exports.useSigner = useSigner;
exports.useWeb3Conntectors = useWeb3Conntectors;
