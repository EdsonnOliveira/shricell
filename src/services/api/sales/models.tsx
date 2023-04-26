export type IndexType = {
    customerId?: string | number;
    paymentReceipt?: FileList | null;
}

export interface SaleProps {
    message?: string;
    saleId?: string | number;
    customerId?: string | number;
    companyName?: string | number;
    saleValue?: string | number;
    dateTimeInsert?: string | number;
    hash?: string | number;
    saleCost?: string | number;
    paymentReceipt?: string | number;
}