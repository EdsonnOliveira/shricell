import { TR } from "@atomic/constants/table";
import { HeaderItemsPreview } from "@atomic/constants/header";
import { LoginTypes } from "@redux/reducers/login/models";
import { StockProps } from "@api/stock/models";

export interface IndexProps {
    dataUser: LoginTypes['data']
    setDataSale: (data: SalesTypes['data']) => void
}

export interface ViewProps {
    nameUser: string;
    latestSales: TR[]
    itemsPreview: HeaderItemsPreview[]
    outOfStock: StockProps[];
}