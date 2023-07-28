import { HeaderItemsPreview } from "@atomic/constants/header";
import { NextRouter } from "next/router";
import { TR } from "@atomic/constants/table";
import { CustomersTypes } from "@redux/reducers/customers/models";
import { SetText, SetVoid } from "~/types/set";

export interface IndexProps {
    setDataCustomer: (data: CustomersTypes['data']) => void
}

export interface ViewProps {
    data: TR[];
    itemsPreview: HeaderItemsPreview[]
    modalAdd: boolean;
    setModalAdd: (visible: boolean) => void;

    dunsNumber: string;
    setDunsNumber: SetText;
    federalTax: string;
    setFederalTax: SetText;
    companyLegal: string;
    setCompanyLegal: SetText;
    phone: string;
    setPhone: SetText;
    zipCode: string;
    setZipCode: SetText;
    companyAddress: string;
    setCompanyAddress: SetText;
    state: string;
    setState: SetText;
    city: string;
    setCity: SetText;
    country: string;
    setCountry: SetText;
    stateCorporation: string;
    setStateCorporation: SetText;
    typeIndustry: string;
    setTypeIndustry: SetText;
    emailCorporation: string;
    setEmailCorporation: SetText;
    businessIdentity: string;
    setBusinessIdentity: SetText;
    webSite: string;
    setWebSite: SetText;
    aboutUs: string;
    setAboutUs: SetText;
    saveCustomer: SetVoid;
}

export default function Return() {
    return <></>
}