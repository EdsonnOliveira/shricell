export interface IndexProps {
    data: Data;
}

export type SalesTypes = IndexProps;

type Data = {
    saleId: string | number;
    customerId: string | number;
    companyName: string | number;
    saleValue: string | number;
    dateTimeInsert: string | number;
    hash: string | number;
    saleCost: string | number;
    paymentReceipt: string | number;
}