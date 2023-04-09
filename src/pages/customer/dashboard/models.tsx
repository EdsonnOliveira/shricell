import { HeaderItemsPreview } from "@atomic/constants/header";
import { ItemsCart } from "@types/itemsCart";
import { SetBoolean, SetIndex } from "@types/set";
import { RadioButtonType } from "~/atomic/constants/radioButton";

export interface ViewProps {
    itemsPreview: HeaderItemsPreview[];
    itemsCart: ItemsCart[];
    selectedIncludeOutStock: boolean;
    setSelectedIncludeOutStock: SetBoolean;
}