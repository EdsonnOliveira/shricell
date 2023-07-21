import { TR } from "@atomic/constants/table";
import { HeaderItemsPreview } from "@atomic/constants/header";
import { SalesTypes } from "@redux/reducers/sales/models";
import { NextRouter } from "next/router";

export interface IndexProps {
    setDataSale: (data: SalesTypes['data']) => void
}

export interface ViewProps {
    router: NextRouter;
    data: TR[];
    itemsPreview: HeaderItemsPreview[]
}

export default function Return() {
    return <></>
}