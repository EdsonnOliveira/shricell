import { HeaderItemsPreview } from "@atomic/constants/header";
import { ItemsCart } from "@types/itemsCart";

export interface ViewProps {
    itemsPreview: HeaderItemsPreview[];
    itemsCart: ItemsCart[];
}