import { HeaderItemsPreview } from "@atomic/constants/header";
import { ItemsCart } from "@typing/itemsCart";
import { SetBoolean } from "@typing/set";
import { OptionsType } from "@atomic/constants/select";
import { LoginTypes } from "@redux/reducers/login/models";

export interface IndexProps {
    dataUser: LoginTypes['data']
}

export interface ViewProps {
    idUser: string;
    nameUser: string;
    itemsPreview: HeaderItemsPreview[];
    selectedIncludeOutStock: boolean;
    setSelectedIncludeOutStock: SetBoolean;
    gradesItems: OptionsType[]
    gradesSelecteds: [];
    setGradesSelecteds: (label: string, type: string) => void;
    manufacturerItems: OptionsType[];
    manufacturerSelecteds: []
    setManufacturerSelecteds: (label: string, type: string) => void;
    devicesItems: ItemsCart[]
    fieldRequired: string;
    modalRequired: boolean;
    setModalRequired: SetBoolean;
    onClickBuy: (id: string, qt: string, salePrice: string, action: 'Buy' | 'Update' | 'Delete') => void;
}

export default function Return() {
    return <></>
}