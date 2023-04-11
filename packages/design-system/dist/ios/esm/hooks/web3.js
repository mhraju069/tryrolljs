import { useWeb3React } from '@web3-react/core';
import { useCallback, useEffect, useMemo, useContext } from 'react';
import '../context/modal.js';
import '../context/theme.js';
import { Web3ConnectorsContext } from '../context/web3.js';
import '../context/themeV2.js';

var ethEventChainIDChanged = 'chainIdChanged';
var ethEventChainChanged = 'chainChanged';
var ethEventAccountsChange = 'accountsChanged';
var useInactiveListener = function (connectors, onChangeChain, onChangeAccount) {
  var _a = useWeb3React(),
    error = _a.error,
    activate = _a.activate;
  var handleReActivate = useCallback(function (message, first) {
    first();
    if (!connectors) return;
    activate(connectors.injected, undefined, true).catch(function (err) {
      console.error(message, err);
    });
  }, [activate, connectors]);
  var _onChangeChain = useCallback(function () {
    handleReActivate('failed to re-activate after network changed', function () {
      return onChangeChain && onChangeChain;
    });
  }, [handleReActivate, onChangeChain]);
  var _onChangeAccount = useCallback(function (accounts) {
    accounts.length > 0 && handleReActivate('failed to re-active after account changed', function () {
      return onChangeAccount && onChangeAccount();
    });
  }, [handleReActivate, onChangeAccount]);
  useEffect(function () {
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
  var library = useWeb3React().library;
  return library;
};
var useSigner = function () {
  var library = useLibrary();
  var signer = useMemo(function () {
    return library ? library.getSigner() : undefined;
  }, [library]);
  return signer;
};
var useEthAddress = function () {
  var account = useWeb3React().account;
  return account;
};
var useChainID = function () {
  var chainId = useWeb3React().chainId;
  return chainId;
};
var useWeb3Conntectors = function () {
  return useContext(Web3ConnectorsContext);
};

export { useChainID, useEthAddress, useInactiveListener, useLibrary, useSigner, useWeb3Conntectors };
