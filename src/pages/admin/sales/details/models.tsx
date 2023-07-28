import { TR } from "@atomic/constants/table";
import { ItemStep } from "@atomic/constants/steps";
import { LoginTypes } from "@redux/reducers/login/models";
import { SalesTypes } from "@redux/reducers/sales/models";
import { SetBoolean, SetVoid } from "@typing/set";

export interface IndexProps {
    dataUser: LoginTypes['data']
    dataSale: SalesTypes['data']
}

export interface ViewProps {
    steps: ItemStep[]
    dataSale: SalesTypes['data']
    dataItems: TR[];
    totalQuantity: string;
    viewPayment: SetVoid;
    confirmPayment: SetVoid;
    denyPayment: SetVoid;
    totalSales: string;
    modalViewPayment: boolean;
    setModalViewPayment: SetBoolean;
}

export default function Return() {
    return <></>
}