import { NextRouter } from "next/router";

import { StockTypes } from "@redux/reducers/stock/models";

import { HeaderItemsPreview } from "@atomic/constants/header";
import { TR } from "@atomic/constants/table";
import { OptionsType, SetOptionsType } from "@atomic/constants/select";

import { SetBoolean, SetText, SetVoid } from "@typing/set";

export interface IndexProps {
    setDataStock: (data: StockTypes['data']) => void;
}

export interface ViewProps {
    router: NextRouter;
    data: TR[];
    itemsPreview: HeaderItemsPreview[];
    modalSupplier: boolean;
    setModalSupplier: SetBoolean;
    nameSupplier: string;
    setNameSupplier: SetText;
    phoneSupplier: string;
    setPhoneSupplier: SetText;
    emailSupplier: string;
    setEmailSupplier: SetText;
    addressSupplier: string;
    setAddressSupplier: SetText;
    citySupplier: string;
    setCitySupplier: SetText;
    stateSupplier: string;
    setStateSupplier: SetText;
    zipCodeSupplier: string;
    setZipCodeSupplier: SetText;
    saveSupplier: SetVoid;
    fieldRequired: string;
    modalRequired: boolean;
    setModalRequired: SetBoolean;

    modalStock: boolean;
    setModalStock: SetBoolean;
    supplierStock: OptionsType;
    setSupplierStock: SetOptionsType;
    setFilterNameSupplierStock: SetText;
    suppliersItems: OptionsType[]
    quantityStock: string;
    setQuantityStock: SetText;
    unitPriceStock: string;
    setUnitPriceStock: SetText;
    annotationStock: string;
    setAnnotationStock: SetText;
    saveStock: SetVoid;
}

export default function Return() {
    return <></>
}