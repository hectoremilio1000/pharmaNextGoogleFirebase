/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CLIENTESSCreateFormInputValues = {
    username?: string;
    nombre?: string;
};
export declare type CLIENTESSCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    nombre?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CLIENTESSCreateFormOverridesProps = {
    CLIENTESSCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CLIENTESSCreateFormProps = React.PropsWithChildren<{
    overrides?: CLIENTESSCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CLIENTESSCreateFormInputValues) => CLIENTESSCreateFormInputValues;
    onSuccess?: (fields: CLIENTESSCreateFormInputValues) => void;
    onError?: (fields: CLIENTESSCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CLIENTESSCreateFormInputValues) => CLIENTESSCreateFormInputValues;
    onValidate?: CLIENTESSCreateFormValidationValues;
} & React.CSSProperties>;
export default function CLIENTESSCreateForm(props: CLIENTESSCreateFormProps): React.ReactElement;
