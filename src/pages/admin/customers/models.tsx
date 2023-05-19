import { HeaderItemsPreview } from "@atomic/constants/header";
import { NextRouter } from "next/router";
import { TR } from "@atomic/constants/table";
import { CustomersTypes } from "@redux/reducers/customers/models";

export interface IndexProps {
    setDataCustomer: (data: CustomersTypes['data']) => void
}

export interface ViewProps {
    data: TR[];
    itemsPreview: HeaderItemsPreview[]
    modalAdd: boolean;
    setModalAdd: (visible: boolean) => void;
}

export default function Return() {
    return <></>
}