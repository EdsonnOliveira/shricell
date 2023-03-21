import { HeaderItemsPreview } from "@atomic/constants/header";
import { TR } from "~/atomic/constants/table";

export interface ViewProps {
    latestSales: TR[];
    itemsPreview: HeaderItemsPreview[]
}