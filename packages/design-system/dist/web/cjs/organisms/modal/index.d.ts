import { IIconButtonProps, IModalProps } from 'native-base';
import { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import type { InterfaceBoxProps } from 'native-base/lib/typescript/components/primitives/Box';
export interface ModalProps extends IModalProps {
}
export declare const Modal: {
    (props: ModalProps): JSX.Element;
    Content: (props: InterfaceBoxProps<IModalProps>) => JSX.Element;
    Header: ({ style, children }: ModalHeaderProps) => JSX.Element;
    SubHeader: ({ style, children }: ModalSubHeaderProps) => JSX.Element;
    Body: ({ style, children, ...rest }: ModalBodyProps) => JSX.Element;
    Footer: ({ style, children }: ModalFooterProps) => JSX.Element;
    CloseButton: ({ onPress }: IIconButtonProps) => JSX.Element;
};
export interface ModalHeaderProps extends ViewProps {
    children: string;
}
export interface ModalSubHeaderProps extends ViewProps {
    children: string;
}
export interface ModalBodyProps extends ViewProps {
    children: ReactNode;
}
export interface ModalFooterProps extends ViewProps {
    children: ReactNode;
}
