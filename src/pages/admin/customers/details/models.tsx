import { TR } from "@atomic/constants/table";
import { CustomersTypes } from "@redux/reducers/customers/models";
import { SalesTypes } from "@redux/reducers/sales/models";

export interface IndexProps {
    dataCustomer: CustomersTypes['data']
    setDataSale: (data: SalesTypes['data']) => void
}

export interface ViewProps {
    isEdit: boolean;
    dataCustomer: CustomersTypes['data']
    latestSales: TR[];
    modalDetails: boolean;
    setModalDetails: (visible: boolean) => void;
    billedAmount: string;
}