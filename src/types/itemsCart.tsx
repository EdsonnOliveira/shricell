import { BrandType } from "@atomic/constants/brand";
import { SetText } from "./set";

export type ItemsCart = {
    idUser: string;
    brand: BrandType;
    name: string;
    storage: string;
    grade: string;
    price: string;
    quantity: string;
    onClickBuy: (id: string, qt: string, salePrice: string) => void;
    colors: ColorsType[];
    showItems: boolean;
}

type ColorsType = {
    deviceId: string;
    colorId: string;
    name: string;
    color: string | undefined;
    quantity: string;
    price: string;
}