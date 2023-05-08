export type IndexType = {
    supplierId: string;
    deviceId: string | null;
    quantity: number | string | null;
    unitPrice: string;
    annotation: string;
}

export interface StockProps {
    stockId: string | number;
    model: string
}