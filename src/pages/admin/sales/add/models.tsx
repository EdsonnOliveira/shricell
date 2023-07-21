import { SetBoolean, SetText } from "@typing/set";
import { ItemsCart } from "@typing/itemsCart";
import { OptionsType } from "@atomic/constants/select";

export interface IndexProps {
}

export interface ViewProps {
    userItems: OptionsType[];
    user: string;
    setUser: SetText;
    devicesItems: ItemsCart[]
    onClickBuy: (id: string, qt: string, salePrice: string, action: 'Buy' | 'Update' | 'Delete') => void;
    fieldRequired: string;
    modalRequired: boolean;
    setModalRequired: SetBoolean;
}

export default function Return() {
    return <></>
}