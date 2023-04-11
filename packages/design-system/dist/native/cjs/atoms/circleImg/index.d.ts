/// <reference types="react" />
import type { ImageStyle, StyleProp } from 'react-native';
export interface CircleImgProps {
    size?: number;
    style?: StyleProp<ImageStyle>;
    uri?: string;
    color?: Array<string>;
}
export declare const DEFAULT_CIRCLE_IMG_SIZE = 48;
export declare const CircleImg: ({ size, style, uri, color, }: CircleImgProps) => JSX.Element;
