import { jsx } from 'react/jsx-runtime';
import 'react';
import '../../context/modal.js';
import '../../context/theme.js';
import '../../context/web3.js';
import '../../context/themeV2.js';
import { useChainID } from '../../hooks/web3.js';
import 'react-native';
import { SUPPORTED_CHAIN_IDS } from '../../web3/connectors.js';
import { Banner } from '../banner/index.js';

var isSupportedNetwork = function (supportedChainIDs, chainID) {
  return supportedChainIDs.findIndex(function (supportedChainID) {
    return supportedChainID === chainID;
  }) !== -1;
};
var InvalidNetworkBanner = function (_a) {
  var title = _a.title,
    _b = _a.supportedChainIDs,
    supportedChainIDs = _b === void 0 ? SUPPORTED_CHAIN_IDS : _b;
  var chainID = useChainID();
  if (!chainID || isSupportedNetwork(supportedChainIDs, chainID)) {
    return null;
  }
  return jsx(Banner, {
    title: title !== null && title !== void 0 ? title : 'You are connected to the wrong network.',
    variant: "warning"
  });
};

export { InvalidNetworkBanner };
