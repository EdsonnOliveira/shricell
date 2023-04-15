import { SetBoolean, SetFile, SetText, SetVoid } from "@types/set";
import { GetFile } from "@types/get";
import { LoginTypes } from "@redux/reducers/login/models";

export interface IndexProps {
    setToken: SetText;
    setData: ({ id, email, name, type }: LoginTypes['data']) => void;
}

export interface ViewProps extends LoginProps, RegisterProps, AttachmentProps {
    steps: Steps;
}

export interface LoginProps {
    email: string;
    setEmail: SetText;
    password: string;
    setPassword: SetText;
    clickLogin: SetVoid;
    clickRegister: SetVoid;
    modalError: boolean;
    setModalError: SetBoolean;
}

export interface RegisterProps {
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
    haveAccount: SetVoid;
    clickAttachment: SetVoid;
}

export interface AttachmentProps {
    certificate: GetFile;
    setCertificate: SetFile;
    photoID: GetFile;
    setPhotoID: SetFile;
    resaleTax: GetFile;
    setResaleTax: SetFile;
    haveAccount: SetVoid;
    clickFinalize: SetVoid;
}

export type Steps = 'login' | 'register' | 'attachment' | 'success'