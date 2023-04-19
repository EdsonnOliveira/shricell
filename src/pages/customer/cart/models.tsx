import { ItemsCart } from "@types/itemsCart";
import { SetBoolean } from "@types/set";
import { LoginTypes } from "@redux/reducers/login/models";

export interface IndexProps {
    dataUser: LoginTypes['data']
}

export interface ViewProps {
    idUser: string;
    totalQuantity: string;
    totalValue: string;
    devicesItems: ItemsCart[]
    fieldRequired: string;
    modalRequired: boolean;
    setModalRequired: SetBoolean;
    onClickBuy: (id: string, qt: string, salePrice: string, action: 'Buy' | 'Update' | 'Delete') => void;
}