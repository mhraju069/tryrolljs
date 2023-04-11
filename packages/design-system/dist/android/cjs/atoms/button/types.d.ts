import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
export type ButtonVariant = 'primary' | 'secondary';
export type ButtonProps = {
    style?: StyleProp<ViewStyle>;
    touchableOpacityStyle?: StyleProp<ViewStyle>;
    variant: ButtonVariant;
    disabled?: boolean;
    inverted?: boolean;
    title?: string;
    onPress?: (e?: GestureResponderEvent) => void;
    isHovering?: boolean | undefined;
};
