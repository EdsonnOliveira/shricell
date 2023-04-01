import { TR } from "@atomic/constants/table";

export interface ViewProps {
    isEdit: boolean;
    data: DataType
    latestSales: TR[];
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