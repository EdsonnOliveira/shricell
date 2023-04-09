import { SetText } from "@types/set";

export interface ViewProps {
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