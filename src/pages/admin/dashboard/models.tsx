import { LoginTypes } from "@redux/reducers/login/models";
import { SalesTypes } from "@redux/reducers/sales/models";

import { TR } from "@atomic/constants/table";
import { HeaderItemsPreview } from "@atomic/constants/header";

import { StockProps } from "@api/stock/models";
import { SetIndex } from "@typing/set";

export interface IndexProps {
    dataUser: LoginTypes['data']
    setDataSale: (data: SalesTypes['data']) => void
}

export interface ViewProps {
    nameUser: string;
    latestSales: TR[]
    itemsPreview: HeaderItemsPreview[]
    billedAmount: string;
    outOfStock: StockProps[];
}

export default function Return() {
    return <></>
}