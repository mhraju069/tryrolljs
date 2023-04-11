/// <reference types="react" />
interface TokenAppearanceProps {
    logo: string;
    name: string;
    symbol: string;
    action: {
        title: string;
        onPress: () => void;
    };
}
export declare const TokenAppearance: React.FC<TokenAppearanceProps>;
export {};
