import { TR } from "@atomic/constants/table";
import { CustomersTypes } from "@redux/reducers/customers/models";

export interface IndexProps {
    dataCustomer: CustomersTypes['data']
}

export interface ViewProps {
    isEdit: boolean;
    dataCustomer: CustomersTypes['data']
    latestSales: TR[];
    modalDetails: boolean;
    setModalDetails: (visible: boolean) => void;
}