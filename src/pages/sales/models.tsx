import { NextRouter } from "next/router";
import { TR } from "@atomic/constants/table";
import { HeaderItemsPreview } from "@atomic/constants/header";

export interface ViewProps {
    router: NextRouter;
    latestSales: TR[];
    itemsPreview: HeaderItemsPreview[]
}