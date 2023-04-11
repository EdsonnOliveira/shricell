import { HeaderItemsPreview } from "@atomic/constants/header";
import { ItemsCart } from "@types/itemsCart";
import { SetBoolean } from "@types/set";
import { OptionsType, SetOptionsType } from "@atomic/constants/select";

export interface ViewProps {
    itemsPreview: HeaderItemsPreview[];
    selectedIncludeOutStock: boolean;
    setSelectedIncludeOutStock: SetBoolean;
    gradesItems: OptionsType[]
    gradesSelecteds: OptionsType[];
    setGradesSelecteds: SetOptionsType
    devicesItems: ItemsCart[]
}