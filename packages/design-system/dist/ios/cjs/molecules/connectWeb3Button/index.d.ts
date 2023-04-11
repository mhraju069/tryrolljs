/// <reference types="react" />
import { AbstractConnector } from '@web3-react/abstract-connector';
import { StyleProp, ViewStyle } from 'react-native';
export type HandleWeb3Connect = (c: AbstractConnector) => void;
export type ConnectWeb3ButtonProps = {
    buttonStyle?: StyleProp<ViewStyle>;
    onPress: () => void;
    activity?: boolean;
};
export declare const ConnectWeb3Button: ({ buttonStyle, onPress, activity, }: ConnectWeb3ButtonProps) => JSX.Element;
