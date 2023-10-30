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
export declare type CLIENTESSUpdateFormInputValues = {
    username?: string;
    nombre?: string;
};
export declare type CLIENTESSUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    nombre?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CLIENTESSUpdateFormOverridesProps = {
    CLIENTESSUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CLIENTESSUpdateFormProps = React.PropsWithChildren<{
    overrides?: CLIENTESSUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cLIENTESS?: any;
    onSubmit?: (fields: CLIENTESSUpdateFormInputValues) => CLIENTESSUpdateFormInputValues;
    onSuccess?: (fields: CLIENTESSUpdateFormInputValues) => void;
    onError?: (fields: CLIENTESSUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CLIENTESSUpdateFormInputValues) => CLIENTESSUpdateFormInputValues;
    onValidate?: CLIENTESSUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CLIENTESSUpdateForm(props: CLIENTESSUpdateFormProps): React.ReactElement;
