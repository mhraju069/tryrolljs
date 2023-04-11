import { ReactNode } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { TypographyBaseProps } from '../typography';
export type AnchorProps = {
    children: ReactNode;
    href?: string;
    target?: string;
    onPress?: (event?: GestureResponderEvent) => void;
};
export declare const Anchor: ({ children, href, fontSize, target, onPress, }: AnchorProps & Pick<TypographyBaseProps, 'fontSize'>) => JSX.Element;
