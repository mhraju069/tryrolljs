import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useState, useCallback, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import '../../context/modal.js';
import '../../context/theme.js';
import { Web3ConnectorsContext } from '../../context/web3.js';
import '../../context/themeV2.js';
import { useInactiveListener } from '../../hooks/web3.js';
import 'react-native-web';
import { Web3Connectors, CHAIN_ID_MAIN_NET, SUPPORTED_CHAIN_IDS } from '../../web3/connectors.js';

var Web3ConnectorProvider = function (_a) {
  var children = _a.children,
    fortmaticApiKey = _a.fortmaticApiKey,
    portisDappID = _a.portisDappID,
    _b = _a.defaultChainID,
    defaultChainID = _b === void 0 ? CHAIN_ID_MAIN_NET : _b,
    _c = _a.supportedChainIDs,
    supportedChainIDs = _c === void 0 ? SUPPORTED_CHAIN_IDS : _c,
    _d = _a.eagerConnect,
    eagerConnect = _d === void 0 ? true : _d;
  var _e = useWeb3React(),
    activate = _e.activate,
    connector = _e.connector;
  var _f = useState(false),
    isActivating = _f[0],
    setIsActivating = _f[1];
  var _g = useState(new Web3Connectors(fortmaticApiKey, portisDappID, defaultChainID, supportedChainIDs)),
    connectors = _g[0],
    setConnectors = _g[1];
  useInactiveListener(connectors);
  var handleConnect = useCallback(function (c) {
    setIsActivating(true);
    activate(c);
  }, [activate, setIsActivating]);
  var handleEagerConnect = useCallback(function () {
    if (!connectors) return;
    connectors.injected.isAuthorized().then(function (authorized) {
      if (!authorized) {
        setIsActivating(false);
        return;
      }
      if (!isActivating) setIsActivating(true);
      activate(connectors.injected, undefined, true).finally(function () {
        return setIsActivating(false);
      });
    });
  }, [connectors, activate, isActivating]);
  // listen to connection state and turn off activity
  useEffect(function () {
    if (isActivating && connector) {
      setIsActivating(false);
    }
  }, [connector, isActivating]);
  // connect to injected connecter if already authorized
  useEffect(function () {
    if (eagerConnect) {
      handleEagerConnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return jsx(Web3ConnectorsContext.Provider, __assign({
    value: {
      connectors: connectors,
      setConnectors: setConnectors,
      handleConnect: handleConnect,
      isActivating: isActivating,
      eagerConnect: handleEagerConnect
    }
  }, {
    children: children
  }));
};

export { Web3ConnectorProvider };
