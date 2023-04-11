'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var wagmi = require('wagmi');

var useEthAddress = function () {
  var address = wagmi.useAccount().address;
  return address;
};

exports.useEthAddress = useEthAddress;
