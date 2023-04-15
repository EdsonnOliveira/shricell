import { HeaderItemsPreview } from "@atomic/constants/header";
import { ItemsCart } from "@types/itemsCart";
import { SetBoolean } from "@types/set";
import { OptionsType } from "@atomic/constants/select";
import { LoginTypes } from "@redux/reducers/login/models";

export interface IndexProps {
    dataUser: LoginTypes['data']
}

export interface ViewProps {
    nameUser: string;
    itemsPreview: HeaderItemsPreview[];
    selectedIncludeOutStock: boolean;
    setSelectedIncludeOutStock: SetBoolean;
    gradesItems: OptionsType[]
    gradesSelecteds: [];
    setGradesSelecteds: (label: string, type: string) => void;;
    manufacturerItems: OptionsType[];
    manufacturerSelecteds: []
    setManufacturerSelecteds: (label: string, type: string) => void;
    devicesItems: ItemsCart[]
}