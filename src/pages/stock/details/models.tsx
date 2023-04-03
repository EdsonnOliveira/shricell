import { Stock } from "@types/stock";
import { OptionsType } from "@atomic/constants/select";
import { SetText } from "~/types/set";

export interface ViewProps {
    isEdit: boolean;
    stock: Stock;
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
}