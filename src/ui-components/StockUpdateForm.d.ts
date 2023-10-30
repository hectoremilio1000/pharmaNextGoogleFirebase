/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Stock } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StockUpdateFormInputValues = {
    isValueRounded?: boolean;
    stockLevel?: number;
    stockLevelStatus?: string;
};
export declare type StockUpdateFormValidationValues = {
    isValueRounded?: ValidationFunction<boolean>;
    stockLevel?: ValidationFunction<number>;
    stockLevelStatus?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockUpdateFormOverridesProps = {
    StockUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    isValueRounded?: PrimitiveOverrideProps<SwitchFieldProps>;
    stockLevel?: PrimitiveOverrideProps<TextFieldProps>;
    stockLevelStatus?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StockUpdateFormProps = React.PropsWithChildren<{
    overrides?: StockUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    stock?: Stock;
    onSubmit?: (fields: StockUpdateFormInputValues) => StockUpdateFormInputValues;
    onSuccess?: (fields: StockUpdateFormInputValues) => void;
    onError?: (fields: StockUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StockUpdateFormInputValues) => StockUpdateFormInputValues;
    onValidate?: StockUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StockUpdateForm(props: StockUpdateFormProps): React.ReactElement;
