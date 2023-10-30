/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Product } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ProductUpdateForm(props) {
  const {
    id: idProp,
    product: productModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    additionalDescription: "",
    antibiotic: false,
    availableForPickup: false,
    brandName: "",
    code: "",
    configurable: false,
    description: "",
    eans: [],
    exclusionCode: "",
    hasDiscountPrice: false,
    isLabProduct: false,
    name: "",
    naturalHealth: false,
    numberOfReviews: "",
    potentialPromotions: [],
    presentation: "",
    productReferences: [],
    providerName: "",
    purchasable: false,
    registrationDate: "",
    summary: "",
    url: "",
    priceCurrencyIso: "",
    priceFormattedValue: "",
    priceType: "",
    priceValue: "",
    labInfoCode: "",
    labInfoMessage: "",
    stockIsValueRounded: false,
    stockLevel: "",
    stockLevelStatus: "",
    numero: "",
  };
  const [additionalDescription, setAdditionalDescription] = React.useState(
    initialValues.additionalDescription
  );
  const [antibiotic, setAntibiotic] = React.useState(initialValues.antibiotic);
  const [availableForPickup, setAvailableForPickup] = React.useState(
    initialValues.availableForPickup
  );
  const [brandName, setBrandName] = React.useState(initialValues.brandName);
  const [code, setCode] = React.useState(initialValues.code);
  const [configurable, setConfigurable] = React.useState(
    initialValues.configurable
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [eans, setEans] = React.useState(initialValues.eans);
  const [exclusionCode, setExclusionCode] = React.useState(
    initialValues.exclusionCode
  );
  const [hasDiscountPrice, setHasDiscountPrice] = React.useState(
    initialValues.hasDiscountPrice
  );
  const [isLabProduct, setIsLabProduct] = React.useState(
    initialValues.isLabProduct
  );
  const [name, setName] = React.useState(initialValues.name);
  const [naturalHealth, setNaturalHealth] = React.useState(
    initialValues.naturalHealth
  );
  const [numberOfReviews, setNumberOfReviews] = React.useState(
    initialValues.numberOfReviews
  );
  const [potentialPromotions, setPotentialPromotions] = React.useState(
    initialValues.potentialPromotions
  );
  const [presentation, setPresentation] = React.useState(
    initialValues.presentation
  );
  const [productReferences, setProductReferences] = React.useState(
    initialValues.productReferences
  );
  const [providerName, setProviderName] = React.useState(
    initialValues.providerName
  );
  const [purchasable, setPurchasable] = React.useState(
    initialValues.purchasable
  );
  const [registrationDate, setRegistrationDate] = React.useState(
    initialValues.registrationDate
  );
  const [summary, setSummary] = React.useState(initialValues.summary);
  const [url, setUrl] = React.useState(initialValues.url);
  const [priceCurrencyIso, setPriceCurrencyIso] = React.useState(
    initialValues.priceCurrencyIso
  );
  const [priceFormattedValue, setPriceFormattedValue] = React.useState(
    initialValues.priceFormattedValue
  );
  const [priceType, setPriceType] = React.useState(initialValues.priceType);
  const [priceValue, setPriceValue] = React.useState(initialValues.priceValue);
  const [labInfoCode, setLabInfoCode] = React.useState(
    initialValues.labInfoCode
  );
  const [labInfoMessage, setLabInfoMessage] = React.useState(
    initialValues.labInfoMessage
  );
  const [stockIsValueRounded, setStockIsValueRounded] = React.useState(
    initialValues.stockIsValueRounded
  );
  const [stockLevel, setStockLevel] = React.useState(initialValues.stockLevel);
  const [stockLevelStatus, setStockLevelStatus] = React.useState(
    initialValues.stockLevelStatus
  );
  const [numero, setNumero] = React.useState(initialValues.numero);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = productRecord
      ? { ...initialValues, ...productRecord }
      : initialValues;
    setAdditionalDescription(cleanValues.additionalDescription);
    setAntibiotic(cleanValues.antibiotic);
    setAvailableForPickup(cleanValues.availableForPickup);
    setBrandName(cleanValues.brandName);
    setCode(cleanValues.code);
    setConfigurable(cleanValues.configurable);
    setDescription(cleanValues.description);
    setEans(cleanValues.eans ?? []);
    setCurrentEansValue("");
    setExclusionCode(cleanValues.exclusionCode);
    setHasDiscountPrice(cleanValues.hasDiscountPrice);
    setIsLabProduct(cleanValues.isLabProduct);
    setName(cleanValues.name);
    setNaturalHealth(cleanValues.naturalHealth);
    setNumberOfReviews(cleanValues.numberOfReviews);
    setPotentialPromotions(cleanValues.potentialPromotions ?? []);
    setCurrentPotentialPromotionsValue("");
    setPresentation(cleanValues.presentation);
    setProductReferences(cleanValues.productReferences ?? []);
    setCurrentProductReferencesValue("");
    setProviderName(cleanValues.providerName);
    setPurchasable(cleanValues.purchasable);
    setRegistrationDate(cleanValues.registrationDate);
    setSummary(cleanValues.summary);
    setUrl(cleanValues.url);
    setPriceCurrencyIso(cleanValues.priceCurrencyIso);
    setPriceFormattedValue(cleanValues.priceFormattedValue);
    setPriceType(cleanValues.priceType);
    setPriceValue(cleanValues.priceValue);
    setLabInfoCode(cleanValues.labInfoCode);
    setLabInfoMessage(cleanValues.labInfoMessage);
    setStockIsValueRounded(cleanValues.stockIsValueRounded);
    setStockLevel(cleanValues.stockLevel);
    setStockLevelStatus(cleanValues.stockLevelStatus);
    setNumero(cleanValues.numero);
    setErrors({});
  };
  const [productRecord, setProductRecord] = React.useState(productModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Product, idProp)
        : productModelProp;
      setProductRecord(record);
    };
    queryData();
  }, [idProp, productModelProp]);
  React.useEffect(resetStateValues, [productRecord]);
  const [currentEansValue, setCurrentEansValue] = React.useState("");
  const eansRef = React.createRef();
  const [currentPotentialPromotionsValue, setCurrentPotentialPromotionsValue] =
    React.useState("");
  const potentialPromotionsRef = React.createRef();
  const [currentProductReferencesValue, setCurrentProductReferencesValue] =
    React.useState("");
  const productReferencesRef = React.createRef();
  const validations = {
    additionalDescription: [],
    antibiotic: [],
    availableForPickup: [],
    brandName: [],
    code: [],
    configurable: [],
    description: [],
    eans: [],
    exclusionCode: [],
    hasDiscountPrice: [],
    isLabProduct: [],
    name: [],
    naturalHealth: [],
    numberOfReviews: [],
    potentialPromotions: [],
    presentation: [],
    productReferences: [],
    providerName: [],
    purchasable: [],
    registrationDate: [],
    summary: [],
    url: [],
    priceCurrencyIso: [],
    priceFormattedValue: [],
    priceType: [],
    priceValue: [],
    labInfoCode: [],
    labInfoMessage: [],
    stockIsValueRounded: [],
    stockLevel: [],
    stockLevelStatus: [],
    numero: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          additionalDescription,
          antibiotic,
          availableForPickup,
          brandName,
          code,
          configurable,
          description,
          eans,
          exclusionCode,
          hasDiscountPrice,
          isLabProduct,
          name,
          naturalHealth,
          numberOfReviews,
          potentialPromotions,
          presentation,
          productReferences,
          providerName,
          purchasable,
          registrationDate,
          summary,
          url,
          priceCurrencyIso,
          priceFormattedValue,
          priceType,
          priceValue,
          labInfoCode,
          labInfoMessage,
          stockIsValueRounded,
          stockLevel,
          stockLevelStatus,
          numero,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Product.copyOf(productRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProductUpdateForm")}
      {...rest}
    >
      <TextField
        label="Additional description"
        isRequired={false}
        isReadOnly={false}
        value={additionalDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription: value,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.additionalDescription ?? value;
          }
          if (errors.additionalDescription?.hasError) {
            runValidationTasks("additionalDescription", value);
          }
          setAdditionalDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("additionalDescription", additionalDescription)
        }
        errorMessage={errors.additionalDescription?.errorMessage}
        hasError={errors.additionalDescription?.hasError}
        {...getOverrideProps(overrides, "additionalDescription")}
      ></TextField>
      <SwitchField
        label="Antibiotic"
        defaultChecked={false}
        isDisabled={false}
        isChecked={antibiotic}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic: value,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.antibiotic ?? value;
          }
          if (errors.antibiotic?.hasError) {
            runValidationTasks("antibiotic", value);
          }
          setAntibiotic(value);
        }}
        onBlur={() => runValidationTasks("antibiotic", antibiotic)}
        errorMessage={errors.antibiotic?.errorMessage}
        hasError={errors.antibiotic?.hasError}
        {...getOverrideProps(overrides, "antibiotic")}
      ></SwitchField>
      <SwitchField
        label="Available for pickup"
        defaultChecked={false}
        isDisabled={false}
        isChecked={availableForPickup}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup: value,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.availableForPickup ?? value;
          }
          if (errors.availableForPickup?.hasError) {
            runValidationTasks("availableForPickup", value);
          }
          setAvailableForPickup(value);
        }}
        onBlur={() =>
          runValidationTasks("availableForPickup", availableForPickup)
        }
        errorMessage={errors.availableForPickup?.errorMessage}
        hasError={errors.availableForPickup?.hasError}
        {...getOverrideProps(overrides, "availableForPickup")}
      ></SwitchField>
      <TextField
        label="Brand name"
        isRequired={false}
        isReadOnly={false}
        value={brandName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName: value,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.brandName ?? value;
          }
          if (errors.brandName?.hasError) {
            runValidationTasks("brandName", value);
          }
          setBrandName(value);
        }}
        onBlur={() => runValidationTasks("brandName", brandName)}
        errorMessage={errors.brandName?.errorMessage}
        hasError={errors.brandName?.hasError}
        {...getOverrideProps(overrides, "brandName")}
      ></TextField>
      <TextField
        label="Code"
        isRequired={false}
        isReadOnly={false}
        value={code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code: value,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.code ?? value;
          }
          if (errors.code?.hasError) {
            runValidationTasks("code", value);
          }
          setCode(value);
        }}
        onBlur={() => runValidationTasks("code", code)}
        errorMessage={errors.code?.errorMessage}
        hasError={errors.code?.hasError}
        {...getOverrideProps(overrides, "code")}
      ></TextField>
      <SwitchField
        label="Configurable"
        defaultChecked={false}
        isDisabled={false}
        isChecked={configurable}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable: value,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.configurable ?? value;
          }
          if (errors.configurable?.hasError) {
            runValidationTasks("configurable", value);
          }
          setConfigurable(value);
        }}
        onBlur={() => runValidationTasks("configurable", configurable)}
        errorMessage={errors.configurable?.errorMessage}
        hasError={errors.configurable?.hasError}
        {...getOverrideProps(overrides, "configurable")}
      ></SwitchField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description: value,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans: values,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            values = result?.eans ?? values;
          }
          setEans(values);
          setCurrentEansValue("");
        }}
        currentFieldValue={currentEansValue}
        label={"Eans"}
        items={eans}
        hasError={errors?.eans?.hasError}
        errorMessage={errors?.eans?.errorMessage}
        setFieldValue={setCurrentEansValue}
        inputFieldRef={eansRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Eans"
          isRequired={false}
          isReadOnly={false}
          value={currentEansValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.eans?.hasError) {
              runValidationTasks("eans", value);
            }
            setCurrentEansValue(value);
          }}
          onBlur={() => runValidationTasks("eans", currentEansValue)}
          errorMessage={errors.eans?.errorMessage}
          hasError={errors.eans?.hasError}
          ref={eansRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "eans")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Exclusion code"
        isRequired={false}
        isReadOnly={false}
        value={exclusionCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode: value,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.exclusionCode ?? value;
          }
          if (errors.exclusionCode?.hasError) {
            runValidationTasks("exclusionCode", value);
          }
          setExclusionCode(value);
        }}
        onBlur={() => runValidationTasks("exclusionCode", exclusionCode)}
        errorMessage={errors.exclusionCode?.errorMessage}
        hasError={errors.exclusionCode?.hasError}
        {...getOverrideProps(overrides, "exclusionCode")}
      ></TextField>
      <SwitchField
        label="Has discount price"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasDiscountPrice}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice: value,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.hasDiscountPrice ?? value;
          }
          if (errors.hasDiscountPrice?.hasError) {
            runValidationTasks("hasDiscountPrice", value);
          }
          setHasDiscountPrice(value);
        }}
        onBlur={() => runValidationTasks("hasDiscountPrice", hasDiscountPrice)}
        errorMessage={errors.hasDiscountPrice?.errorMessage}
        hasError={errors.hasDiscountPrice?.hasError}
        {...getOverrideProps(overrides, "hasDiscountPrice")}
      ></SwitchField>
      <SwitchField
        label="Is lab product"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isLabProduct}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct: value,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.isLabProduct ?? value;
          }
          if (errors.isLabProduct?.hasError) {
            runValidationTasks("isLabProduct", value);
          }
          setIsLabProduct(value);
        }}
        onBlur={() => runValidationTasks("isLabProduct", isLabProduct)}
        errorMessage={errors.isLabProduct?.errorMessage}
        hasError={errors.isLabProduct?.hasError}
        {...getOverrideProps(overrides, "isLabProduct")}
      ></SwitchField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name: value,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <SwitchField
        label="Natural health"
        defaultChecked={false}
        isDisabled={false}
        isChecked={naturalHealth}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth: value,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.naturalHealth ?? value;
          }
          if (errors.naturalHealth?.hasError) {
            runValidationTasks("naturalHealth", value);
          }
          setNaturalHealth(value);
        }}
        onBlur={() => runValidationTasks("naturalHealth", naturalHealth)}
        errorMessage={errors.naturalHealth?.errorMessage}
        hasError={errors.naturalHealth?.hasError}
        {...getOverrideProps(overrides, "naturalHealth")}
      ></SwitchField>
      <TextField
        label="Number of reviews"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numberOfReviews}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews: value,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.numberOfReviews ?? value;
          }
          if (errors.numberOfReviews?.hasError) {
            runValidationTasks("numberOfReviews", value);
          }
          setNumberOfReviews(value);
        }}
        onBlur={() => runValidationTasks("numberOfReviews", numberOfReviews)}
        errorMessage={errors.numberOfReviews?.errorMessage}
        hasError={errors.numberOfReviews?.hasError}
        {...getOverrideProps(overrides, "numberOfReviews")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions: values,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            values = result?.potentialPromotions ?? values;
          }
          setPotentialPromotions(values);
          setCurrentPotentialPromotionsValue("");
        }}
        currentFieldValue={currentPotentialPromotionsValue}
        label={"Potential promotions"}
        items={potentialPromotions}
        hasError={errors?.potentialPromotions?.hasError}
        errorMessage={errors?.potentialPromotions?.errorMessage}
        setFieldValue={setCurrentPotentialPromotionsValue}
        inputFieldRef={potentialPromotionsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Potential promotions"
          isRequired={false}
          isReadOnly={false}
          value={currentPotentialPromotionsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.potentialPromotions?.hasError) {
              runValidationTasks("potentialPromotions", value);
            }
            setCurrentPotentialPromotionsValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "potentialPromotions",
              currentPotentialPromotionsValue
            )
          }
          errorMessage={errors.potentialPromotions?.errorMessage}
          hasError={errors.potentialPromotions?.hasError}
          ref={potentialPromotionsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "potentialPromotions")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Presentation"
        isRequired={false}
        isReadOnly={false}
        value={presentation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation: value,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.presentation ?? value;
          }
          if (errors.presentation?.hasError) {
            runValidationTasks("presentation", value);
          }
          setPresentation(value);
        }}
        onBlur={() => runValidationTasks("presentation", presentation)}
        errorMessage={errors.presentation?.errorMessage}
        hasError={errors.presentation?.hasError}
        {...getOverrideProps(overrides, "presentation")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences: values,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            values = result?.productReferences ?? values;
          }
          setProductReferences(values);
          setCurrentProductReferencesValue("");
        }}
        currentFieldValue={currentProductReferencesValue}
        label={"Product references"}
        items={productReferences}
        hasError={errors?.productReferences?.hasError}
        errorMessage={errors?.productReferences?.errorMessage}
        setFieldValue={setCurrentProductReferencesValue}
        inputFieldRef={productReferencesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Product references"
          isRequired={false}
          isReadOnly={false}
          value={currentProductReferencesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.productReferences?.hasError) {
              runValidationTasks("productReferences", value);
            }
            setCurrentProductReferencesValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "productReferences",
              currentProductReferencesValue
            )
          }
          errorMessage={errors.productReferences?.errorMessage}
          hasError={errors.productReferences?.hasError}
          ref={productReferencesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "productReferences")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Provider name"
        isRequired={false}
        isReadOnly={false}
        value={providerName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName: value,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.providerName ?? value;
          }
          if (errors.providerName?.hasError) {
            runValidationTasks("providerName", value);
          }
          setProviderName(value);
        }}
        onBlur={() => runValidationTasks("providerName", providerName)}
        errorMessage={errors.providerName?.errorMessage}
        hasError={errors.providerName?.hasError}
        {...getOverrideProps(overrides, "providerName")}
      ></TextField>
      <SwitchField
        label="Purchasable"
        defaultChecked={false}
        isDisabled={false}
        isChecked={purchasable}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable: value,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.purchasable ?? value;
          }
          if (errors.purchasable?.hasError) {
            runValidationTasks("purchasable", value);
          }
          setPurchasable(value);
        }}
        onBlur={() => runValidationTasks("purchasable", purchasable)}
        errorMessage={errors.purchasable?.errorMessage}
        hasError={errors.purchasable?.hasError}
        {...getOverrideProps(overrides, "purchasable")}
      ></SwitchField>
      <TextField
        label="Registration date"
        isRequired={false}
        isReadOnly={false}
        value={registrationDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate: value,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.registrationDate ?? value;
          }
          if (errors.registrationDate?.hasError) {
            runValidationTasks("registrationDate", value);
          }
          setRegistrationDate(value);
        }}
        onBlur={() => runValidationTasks("registrationDate", registrationDate)}
        errorMessage={errors.registrationDate?.errorMessage}
        hasError={errors.registrationDate?.hasError}
        {...getOverrideProps(overrides, "registrationDate")}
      ></TextField>
      <TextField
        label="Summary"
        isRequired={false}
        isReadOnly={false}
        value={summary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary: value,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.summary ?? value;
          }
          if (errors.summary?.hasError) {
            runValidationTasks("summary", value);
          }
          setSummary(value);
        }}
        onBlur={() => runValidationTasks("summary", summary)}
        errorMessage={errors.summary?.errorMessage}
        hasError={errors.summary?.hasError}
        {...getOverrideProps(overrides, "summary")}
      ></TextField>
      <TextField
        label="Url"
        isRequired={false}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url: value,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
      ></TextField>
      <TextField
        label="Price currency iso"
        isRequired={false}
        isReadOnly={false}
        value={priceCurrencyIso}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso: value,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.priceCurrencyIso ?? value;
          }
          if (errors.priceCurrencyIso?.hasError) {
            runValidationTasks("priceCurrencyIso", value);
          }
          setPriceCurrencyIso(value);
        }}
        onBlur={() => runValidationTasks("priceCurrencyIso", priceCurrencyIso)}
        errorMessage={errors.priceCurrencyIso?.errorMessage}
        hasError={errors.priceCurrencyIso?.hasError}
        {...getOverrideProps(overrides, "priceCurrencyIso")}
      ></TextField>
      <TextField
        label="Price formatted value"
        isRequired={false}
        isReadOnly={false}
        value={priceFormattedValue}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue: value,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.priceFormattedValue ?? value;
          }
          if (errors.priceFormattedValue?.hasError) {
            runValidationTasks("priceFormattedValue", value);
          }
          setPriceFormattedValue(value);
        }}
        onBlur={() =>
          runValidationTasks("priceFormattedValue", priceFormattedValue)
        }
        errorMessage={errors.priceFormattedValue?.errorMessage}
        hasError={errors.priceFormattedValue?.hasError}
        {...getOverrideProps(overrides, "priceFormattedValue")}
      ></TextField>
      <TextField
        label="Price type"
        isRequired={false}
        isReadOnly={false}
        value={priceType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType: value,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.priceType ?? value;
          }
          if (errors.priceType?.hasError) {
            runValidationTasks("priceType", value);
          }
          setPriceType(value);
        }}
        onBlur={() => runValidationTasks("priceType", priceType)}
        errorMessage={errors.priceType?.errorMessage}
        hasError={errors.priceType?.hasError}
        {...getOverrideProps(overrides, "priceType")}
      ></TextField>
      <TextField
        label="Price value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={priceValue}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue: value,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.priceValue ?? value;
          }
          if (errors.priceValue?.hasError) {
            runValidationTasks("priceValue", value);
          }
          setPriceValue(value);
        }}
        onBlur={() => runValidationTasks("priceValue", priceValue)}
        errorMessage={errors.priceValue?.errorMessage}
        hasError={errors.priceValue?.hasError}
        {...getOverrideProps(overrides, "priceValue")}
      ></TextField>
      <TextField
        label="Lab info code"
        isRequired={false}
        isReadOnly={false}
        value={labInfoCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode: value,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.labInfoCode ?? value;
          }
          if (errors.labInfoCode?.hasError) {
            runValidationTasks("labInfoCode", value);
          }
          setLabInfoCode(value);
        }}
        onBlur={() => runValidationTasks("labInfoCode", labInfoCode)}
        errorMessage={errors.labInfoCode?.errorMessage}
        hasError={errors.labInfoCode?.hasError}
        {...getOverrideProps(overrides, "labInfoCode")}
      ></TextField>
      <TextField
        label="Lab info message"
        isRequired={false}
        isReadOnly={false}
        value={labInfoMessage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage: value,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.labInfoMessage ?? value;
          }
          if (errors.labInfoMessage?.hasError) {
            runValidationTasks("labInfoMessage", value);
          }
          setLabInfoMessage(value);
        }}
        onBlur={() => runValidationTasks("labInfoMessage", labInfoMessage)}
        errorMessage={errors.labInfoMessage?.errorMessage}
        hasError={errors.labInfoMessage?.hasError}
        {...getOverrideProps(overrides, "labInfoMessage")}
      ></TextField>
      <SwitchField
        label="Stock is value rounded"
        defaultChecked={false}
        isDisabled={false}
        isChecked={stockIsValueRounded}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded: value,
              stockLevel,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.stockIsValueRounded ?? value;
          }
          if (errors.stockIsValueRounded?.hasError) {
            runValidationTasks("stockIsValueRounded", value);
          }
          setStockIsValueRounded(value);
        }}
        onBlur={() =>
          runValidationTasks("stockIsValueRounded", stockIsValueRounded)
        }
        errorMessage={errors.stockIsValueRounded?.errorMessage}
        hasError={errors.stockIsValueRounded?.hasError}
        {...getOverrideProps(overrides, "stockIsValueRounded")}
      ></SwitchField>
      <TextField
        label="Stock level"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={stockLevel}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel: value,
              stockLevelStatus,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.stockLevel ?? value;
          }
          if (errors.stockLevel?.hasError) {
            runValidationTasks("stockLevel", value);
          }
          setStockLevel(value);
        }}
        onBlur={() => runValidationTasks("stockLevel", stockLevel)}
        errorMessage={errors.stockLevel?.errorMessage}
        hasError={errors.stockLevel?.hasError}
        {...getOverrideProps(overrides, "stockLevel")}
      ></TextField>
      <TextField
        label="Stock level status"
        isRequired={false}
        isReadOnly={false}
        value={stockLevelStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus: value,
              numero,
            };
            const result = onChange(modelFields);
            value = result?.stockLevelStatus ?? value;
          }
          if (errors.stockLevelStatus?.hasError) {
            runValidationTasks("stockLevelStatus", value);
          }
          setStockLevelStatus(value);
        }}
        onBlur={() => runValidationTasks("stockLevelStatus", stockLevelStatus)}
        errorMessage={errors.stockLevelStatus?.errorMessage}
        hasError={errors.stockLevelStatus?.hasError}
        {...getOverrideProps(overrides, "stockLevelStatus")}
      ></TextField>
      <TextField
        label="Numero"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numero}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              additionalDescription,
              antibiotic,
              availableForPickup,
              brandName,
              code,
              configurable,
              description,
              eans,
              exclusionCode,
              hasDiscountPrice,
              isLabProduct,
              name,
              naturalHealth,
              numberOfReviews,
              potentialPromotions,
              presentation,
              productReferences,
              providerName,
              purchasable,
              registrationDate,
              summary,
              url,
              priceCurrencyIso,
              priceFormattedValue,
              priceType,
              priceValue,
              labInfoCode,
              labInfoMessage,
              stockIsValueRounded,
              stockLevel,
              stockLevelStatus,
              numero: value,
            };
            const result = onChange(modelFields);
            value = result?.numero ?? value;
          }
          if (errors.numero?.hasError) {
            runValidationTasks("numero", value);
          }
          setNumero(value);
        }}
        onBlur={() => runValidationTasks("numero", numero)}
        errorMessage={errors.numero?.errorMessage}
        hasError={errors.numero?.hasError}
        {...getOverrideProps(overrides, "numero")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || productModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || productModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
