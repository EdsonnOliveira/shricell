import { TR } from "@atomic/constants/table";
import { CustomersTypes } from "@redux/reducers/customers/models";
import { SalesTypes } from "@redux/reducers/sales/models";
import { SetText } from "@typing/set";

export interface IndexProps {
    dataCustomer: CustomersTypes['data']
    setDataSale: (data: SalesTypes['data']) => void
}

export interface ViewProps {
    isEdit: boolean;
    dataCustomer: CustomersTypes['data']
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
    latestSales: TR[];
    modalDetails: boolean;
    setModalDetails: (visible: boolean) => void;
    billedAmount: string;
}

export default function Return() {
    return <></>
}