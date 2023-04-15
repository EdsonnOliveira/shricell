import { OptionsType } from "@atomic/constants/select";
import { SetBoolean, SetText } from "@types/set";
import { StockTypes } from "~/services/redux/reducers/stock/models";

export interface IndexProps {
    dataStock: StockTypes['data']
}

export interface ViewProps {
    isEdit: boolean;
    stock: StockTypes['data'];
    brandItems: OptionsType[];
    brand: string;
    setBrand: SetText;
    modelItems: OptionsType[]
    model: string;
    setModel: SetText
    colorItems: OptionsType[]
    color: string;
    setColor: SetText;
    gradeItems: OptionsType[]
    grade: string;
    setGrade: SetText;
    storageItems: OptionsType[]
    storage: string;
    setStorage: SetText;
    price: string;
    setPrice: SetText;
    cost: string;
    setCost: SetText;
    quantity: string;
    setQuantity: SetText;
    save: () => void;
    fieldRequired: string;
    modalRequired: boolean;
    setModalRequired: SetBoolean;
}