import { useAccount } from 'wagmi';

var useEthAddress = function () {
  var address = useAccount().address;
  return address;
};

export { useEthAddress };
