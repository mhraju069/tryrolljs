/// <reference types="react" />
export interface FormStepHeaderProps {
    steps: {
        id: string;
        title: string;
    }[];
    currentStep: string;
}
export declare const FormStepHeader: React.FC<FormStepHeaderProps>;
