/// <reference types="react" />
export type TokenSelectOptionV2Type = {
    name: string;
    symbol: string;
    logo?: string;
    value: string;
    address: string;
};
interface TokenSelectOptionV2Props extends TokenSelectOptionV2Type {
    onChange?: (value: string) => void;
    onClose?: () => void;
}
export declare const TokenSelectOptionV2: React.FC<TokenSelectOptionV2Props>;
export {};
