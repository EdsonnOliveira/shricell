import { HeaderItemsPreview } from "@atomic/constants/header";
import { TR } from "@atomic/constants/table";
import { LoginTypes } from "@redux/reducers/login/models";
import { SalesTypes } from "@redux/reducers/sales/models";

export interface IndexProps {
    dataUser: LoginTypes['data']
    setDataSale: (data: SalesTypes['data']) => void
}

export interface ViewProps {
    itemsPreview: HeaderItemsPreview[];
    data: TR[];
}