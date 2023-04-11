export declare function shortenAddress(address: string, digits?: number): string;
export declare function isAddress(value: string): false | `0x${string}`;
/**
 * @deprecated Use getEtherscanLink instead.
 */
export declare const etherscanAccountUrl: (address: string) => string;
export declare const getEtherscanLink: ({ chainId, address, type, }: {
    chainId: number;
    address: string;
    type: 'address' | 'token' | 'tx';
}) => string;
