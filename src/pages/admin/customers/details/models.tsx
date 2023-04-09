import { TR } from "@atomic/constants/table";

export interface ViewProps {
    isEdit: boolean;
    data: DataType
    latestSales: TR[];
    modalDetails: boolean;
    setModalDetails: (visible: boolean) => void;
}

export type DataType = {
    name: string;
    phone: string;
    email: string;
    status: {
        description: string;
        bgColor: string;
    }
}