/// <reference types="react" />
import { TokenSelectOptionV2Type } from '../../atoms/tokenSelectOptionV2';
export interface TokenSelectContentV2Props {
    defaultValue?: string;
    closable?: boolean;
    options: TokenSelectOptionV2Type[];
    label?: string;
    placeholder?: string;
    searchPlaceholder?: string;
    notFoundText?: string;
    onChange: (value: string) => void;
    onClose?: () => void;
    isLoading?: boolean;
    onSearch?: (value: string) => void;
}
export declare const TokenSelectContentV2: React.FC<TokenSelectContentV2Props>;
