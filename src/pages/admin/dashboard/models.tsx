import { TR } from "@atomic/constants/table";
import { HeaderItemsPreview } from "@atomic/constants/header";
import { LoginTypes } from "@redux/reducers/login/models";

export interface IndexProps {
    dataUser: LoginTypes['data']
}

export interface ViewProps {
    nameUser: string;
    latestSales: TR[]
    itemsPreview: HeaderItemsPreview[]
}