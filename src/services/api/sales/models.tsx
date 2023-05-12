export type IndexType = {
    customerId?: string | number;
    saleId?: string | number;
    paymentReceipt?: FileList | null;
    dateStart?: string
    dateEnd?: string;
}

export interface SaleProps {
    message?: string;
    saleId?: string | number;
    customerId?: string | number;
    companyName?: string | number;
    saleValue?: string | number;
    totalSales?: string | number;
    dateSale?: string | number;
    dateTimeInsert?: string | number;
    hash?: string | number;
    saleCost?: string | number;
    paymentReceipt?: string | number;
    status?: 'PENDING' | 'APPROVED' | 'DENIED';
}