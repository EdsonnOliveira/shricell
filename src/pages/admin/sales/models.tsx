import { TR } from "@atomic/constants/table";
import { HeaderItemsPreview } from "@atomic/constants/header";
import { SalesTypes } from "@redux/reducers/sales/models";

export interface IndexProps {
    setDataSale: (data: SalesTypes['data']) => void
}

export interface ViewProps {
    data: TR[];
    itemsPreview: HeaderItemsPreview[]
}