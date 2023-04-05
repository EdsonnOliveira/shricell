import { NextRouter } from "next/router";
import { HeaderItemsPreview } from "@atomic/constants/header";
import { TR } from "@atomic/constants/table";
import { SetBoolean, SetText, SetVoid } from "@types/set";

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
}