import { utils } from 'ethers';
import { CHAIN_ID_MAIN_NET, CHAIN_ID_GOERLI, CHAIN_ID_POLYGON, CHAIN_ID_MUMBAI } from '../web3/connectors.js';

var _a;
function shortenAddress(address, digits) {
  if (digits === void 0) {
    digits = 4;
  }
  if (!isAddress(address)) {
    return 'Invalid address';
  }
  return "".concat(address.substring(0, digits + 2), "...").concat(address.substring(42 - digits));
}
function isAddress(value) {
  try {
    return utils.getAddress(value.toLowerCase());
  } catch (_a) {
    return false;
  }
}
/**
 * @deprecated Use getEtherscanLink instead.
 */
var etherscanAccountUrl = function (address) {
  return "https://etherscan.io/address/".concat(address);
};
var ETHERSCAN_DATA = (_a = {}, _a[CHAIN_ID_MAIN_NET] = {
  domain: 'etherscan.io'
}, _a[CHAIN_ID_GOERLI] = {
  domain: 'etherscan.io',
  prefix: 'goerli.'
}, _a[CHAIN_ID_POLYGON] = {
  domain: 'polygonscan.com'
}, _a[CHAIN_ID_MUMBAI] = {
  domain: 'polygonscan.com',
  prefix: 'mumbai.'
}, _a);
var getEtherscanLink = function (_a) {
  var chainId = _a.chainId,
    address = _a.address,
    type = _a.type;
  var _b = ETHERSCAN_DATA[chainId] || ETHERSCAN_DATA[CHAIN_ID_MAIN_NET],
    _c = _b.prefix,
    prefix = _c === void 0 ? '' : _c,
    domain = _b.domain;
  return "https://".concat(prefix).concat(domain, "/").concat(type, "/").concat(address);
};

export { etherscanAccountUrl, getEtherscanLink, isAddress, shortenAddress };
