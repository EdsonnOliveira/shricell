export type IndexType = {
    customerId: string | number;
    deviceId?: string | number;
    quantity?: string;
    salePrice?: string
}

export interface CartProps {
    status?: string;
    message?: string;
    itemsId?: string | number;
    deviceId?: string | number;
    quantity?: string;
    costPrice?: string;
    salePrice?: string;
    totalQuantity?: string | number;
    totalValue?: string | number;
}