/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductCreateFormInputValues = {
    additionalDescription?: string;
    antibiotic?: boolean;
    availableForPickup?: boolean;
    brandName?: string;
    code?: string;
    configurable?: boolean;
    description?: string;
    eans?: string[];
    exclusionCode?: string;
    hasDiscountPrice?: boolean;
    isLabProduct?: boolean;
    name?: string;
    naturalHealth?: boolean;
    numberOfReviews?: number;
    potentialPromotions?: string[];
    presentation?: string;
    productReferences?: string[];
    providerName?: string;
    purchasable?: boolean;
    registrationDate?: string;
    summary?: string;
    url?: string;
    priceCurrencyIso?: string;
    priceFormattedValue?: string;
    priceType?: string;
    priceValue?: number;
    labInfoCode?: string;
    labInfoMessage?: string;
    stockIsValueRounded?: boolean;
    stockLevel?: number;
    stockLevelStatus?: string;
    numero?: number;
};
export declare type ProductCreateFormValidationValues = {
    additionalDescription?: ValidationFunction<string>;
    antibiotic?: ValidationFunction<boolean>;
    availableForPickup?: ValidationFunction<boolean>;
    brandName?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
    configurable?: ValidationFunction<boolean>;
    description?: ValidationFunction<string>;
    eans?: ValidationFunction<string>;
    exclusionCode?: ValidationFunction<string>;
    hasDiscountPrice?: ValidationFunction<boolean>;
    isLabProduct?: ValidationFunction<boolean>;
    name?: ValidationFunction<string>;
    naturalHealth?: ValidationFunction<boolean>;
    numberOfReviews?: ValidationFunction<number>;
    potentialPromotions?: ValidationFunction<string>;
    presentation?: ValidationFunction<string>;
    productReferences?: ValidationFunction<string>;
    providerName?: ValidationFunction<string>;
    purchasable?: ValidationFunction<boolean>;
    registrationDate?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    priceCurrencyIso?: ValidationFunction<string>;
    priceFormattedValue?: ValidationFunction<string>;
    priceType?: ValidationFunction<string>;
    priceValue?: ValidationFunction<number>;
    labInfoCode?: ValidationFunction<string>;
    labInfoMessage?: ValidationFunction<string>;
    stockIsValueRounded?: ValidationFunction<boolean>;
    stockLevel?: ValidationFunction<number>;
    stockLevelStatus?: ValidationFunction<string>;
    numero?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductCreateFormOverridesProps = {
    ProductCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    additionalDescription?: PrimitiveOverrideProps<TextFieldProps>;
    antibiotic?: PrimitiveOverrideProps<SwitchFieldProps>;
    availableForPickup?: PrimitiveOverrideProps<SwitchFieldProps>;
    brandName?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    configurable?: PrimitiveOverrideProps<SwitchFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    eans?: PrimitiveOverrideProps<TextFieldProps>;
    exclusionCode?: PrimitiveOverrideProps<TextFieldProps>;
    hasDiscountPrice?: PrimitiveOverrideProps<SwitchFieldProps>;
    isLabProduct?: PrimitiveOverrideProps<SwitchFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    naturalHealth?: PrimitiveOverrideProps<SwitchFieldProps>;
    numberOfReviews?: PrimitiveOverrideProps<TextFieldProps>;
    potentialPromotions?: PrimitiveOverrideProps<TextFieldProps>;
    presentation?: PrimitiveOverrideProps<TextFieldProps>;
    productReferences?: PrimitiveOverrideProps<TextFieldProps>;
    providerName?: PrimitiveOverrideProps<TextFieldProps>;
    purchasable?: PrimitiveOverrideProps<SwitchFieldProps>;
    registrationDate?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    priceCurrencyIso?: PrimitiveOverrideProps<TextFieldProps>;
    priceFormattedValue?: PrimitiveOverrideProps<TextFieldProps>;
    priceType?: PrimitiveOverrideProps<TextFieldProps>;
    priceValue?: PrimitiveOverrideProps<TextFieldProps>;
    labInfoCode?: PrimitiveOverrideProps<TextFieldProps>;
    labInfoMessage?: PrimitiveOverrideProps<TextFieldProps>;
    stockIsValueRounded?: PrimitiveOverrideProps<SwitchFieldProps>;
    stockLevel?: PrimitiveOverrideProps<TextFieldProps>;
    stockLevelStatus?: PrimitiveOverrideProps<TextFieldProps>;
    numero?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductCreateFormInputValues) => ProductCreateFormInputValues;
    onSuccess?: (fields: ProductCreateFormInputValues) => void;
    onError?: (fields: ProductCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductCreateFormInputValues) => ProductCreateFormInputValues;
    onValidate?: ProductCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductCreateForm(props: ProductCreateFormProps): React.ReactElement;
