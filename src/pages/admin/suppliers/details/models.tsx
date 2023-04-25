import { SetBoolean, SetText, SetVoid } from "@types/set";
import { SuppliersTypes } from "@redux/reducers/suppliers/models";

export interface IndexProps {
    dataSupplier: SuppliersTypes['data']
}

export interface ViewProps {
    name: string;
    setName: SetText;
    phone: string;
    setPhone: SetText;
    email: string;
    setEmail: SetText;
    address: string;
    setAddress: SetText;
    city: string;
    setCity: SetText;
    state: string;
    setState: SetText;
    zipCode: string;
    setZipCode: SetText;
    save: SetVoid;
    fieldRequired: string;
    modalRequired: boolean;
    setModalRequired: SetBoolean;
}