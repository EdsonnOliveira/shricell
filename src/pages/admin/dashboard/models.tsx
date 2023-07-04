import { LoginTypes } from "@redux/reducers/login/models";
import { SalesTypes } from "@redux/reducers/sales/models";

import { TR } from "@atomic/constants/table";
import { HeaderItemsPreview } from "@atomic/constants/header";

import { StockProps } from "@api/stock/models";

export interface IndexProps {
    dataUser: LoginTypes['data']
    setDataSale: (data: SalesTypes['data']) => void
}

export interface ViewProps {
    nameUser: string;
    latestSales: TR[];
    pendingSales: TR[];
    itemsPreview: HeaderItemsPreview[]
    billedAmount: string;
    cost: string;
    profit: string;
    outOfStock: StockProps[];
}

export default function Return() {
    return <></>
}