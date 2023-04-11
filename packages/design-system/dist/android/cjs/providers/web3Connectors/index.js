'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var core = require('@web3-react/core');
require('../../context/modal.js');
require('../../context/theme.js');
var web3$1 = require('../../context/web3.js');
require('../../context/themeV2.js');
var web3 = require('../../hooks/web3.js');
require('react-native');
var connectors = require('../../web3/connectors.js');

var Web3ConnectorProvider = function (_a) {
  var children = _a.children,
    fortmaticApiKey = _a.fortmaticApiKey,
    portisDappID = _a.portisDappID,
    _b = _a.defaultChainID,
    defaultChainID = _b === void 0 ? connectors.CHAIN_ID_MAIN_NET : _b,
    _c = _a.supportedChainIDs,
    supportedChainIDs = _c === void 0 ? connectors.SUPPORTED_CHAIN_IDS : _c,
    _d = _a.eagerConnect,
    eagerConnect = _d === void 0 ? true : _d;
  var _e = core.useWeb3React(),
    activate = _e.activate,
    connector = _e.connector;
  var _f = React.useState(false),
    isActivating = _f[0],
    setIsActivating = _f[1];
  var _g = React.useState(new connectors.Web3Connectors(fortmaticApiKey, portisDappID, defaultChainID, supportedChainIDs)),
    connectors$1 = _g[0],
    setConnectors = _g[1];
  web3.useInactiveListener(connectors$1);
  var handleConnect = React.useCallback(function (c) {
    setIsActivating(true);
    activate(c);
  }, [activate, setIsActivating]);
  var handleEagerConnect = React.useCallback(function () {
    if (!connectors$1) return;
    connectors$1.injected.isAuthorized().then(function (authorized) {
      if (!authorized) {
        setIsActivating(false);
        return;
      }
      if (!isActivating) setIsActivating(true);
      activate(connectors$1.injected, undefined, true).finally(function () {
        return setIsActivating(false);
      });
    });
  }, [connectors$1, activate, isActivating]);
  // listen to connection state and turn off activity
  React.useEffect(function () {
    if (isActivating && connector) {
      setIsActivating(false);
    }
  }, [connector, isActivating]);
  // connect to injected connecter if already authorized
  React.useEffect(function () {
    if (eagerConnect) {
      handleEagerConnect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return jsxRuntime.jsx(web3$1.Web3ConnectorsContext.Provider, tslib_es6.__assign({
    value: {
      connectors: connectors$1,
      setConnectors: setConnectors,
      handleConnect: handleConnect,
      isActivating: isActivating,
      eagerConnect: handleEagerConnect
    }
  }, {
    children: children
  }));
};

exports.Web3ConnectorProvider = Web3ConnectorProvider;
