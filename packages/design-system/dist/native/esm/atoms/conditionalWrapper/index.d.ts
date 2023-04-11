import { PropsWithChildren } from 'react';
export interface ConditionalWrapperProps {
    condition: boolean;
    wrapper: (children: React.ReactNode) => JSX.Element;
}
export declare const ConditionalWrapper: ({ condition, wrapper, children, }: PropsWithChildren<ConditionalWrapperProps>) => JSX.Element;
