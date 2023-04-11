/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
import { TokenSelectContentV2Props } from '../../molecules/tokenSelectContentV2';
export type TokenSelectV2Props = TokenSelectContentV2Props & {
    defaultValue?: string;
    style?: StyleProp<ViewStyle>;
    onChange?: (value: string) => void;
};
export declare const TokenSelectV2: React.FC<TokenSelectV2Props>;
