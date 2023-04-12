import { HeaderItemsPreview } from "@atomic/constants/header";
import { ItemsCart } from "@types/itemsCart";
import { SetBoolean, SetText } from "@types/set";
import { OptionsType } from "@atomic/constants/select";

export interface ViewProps {
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