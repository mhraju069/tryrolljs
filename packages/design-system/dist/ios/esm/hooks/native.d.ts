import { LayoutChangeEvent } from 'react-native';
interface Args {
    x: number | null;
    y: number | null;
}
export declare const useFloatingLayoutAndroidHandler: ({ x, y }: Args) => {
    xy: number[];
    onLayout: (event: LayoutChangeEvent) => void;
} | {
    xy: number[];
    onLayout: undefined;
};
export {};
