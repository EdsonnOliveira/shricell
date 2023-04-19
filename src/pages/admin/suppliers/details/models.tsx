import { SetText } from "@types/set";
import { SuppliersTypes } from "@redux/reducers/suppliers/models";

export interface IndexProps {
    dataSupplier: SuppliersTypes['data']
}

export interface ViewProps {
    supplier: SuppliersTypes['data']
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
}