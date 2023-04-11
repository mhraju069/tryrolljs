import { ReactNode, ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface InformationItemProps {
    label: string;
    value: ReactNode;
    style?: StyleProp<ViewStyle>;
}
export interface InformationProps {
    children: (ReactElement<InformationItemProps> | null) | (ReactElement<InformationItemProps> | null)[];
}
export declare const Information: {
    ({ children }: InformationProps): JSX.Element;
    Item: ({ label, value, style }: InformationItemProps) => JSX.Element;
};
