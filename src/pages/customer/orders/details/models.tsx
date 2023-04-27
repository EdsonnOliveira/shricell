import { LoginTypes } from "@redux/reducers/login/models";
import { SalesTypes } from "@redux/reducers/sales/models";

import { TR } from "@atomic/constants/table";
import { ItemStep } from "@atomic/constants/steps";

export interface IndexProps {
    dataUser: LoginTypes['data']
    dataSale: SalesTypes['data']
}

export interface ViewProps {
    steps: ItemStep[]
    dataSale: SalesTypes['data']
    dataItems: TR[];
    totalQuantity: string;
}