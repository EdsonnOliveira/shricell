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

export interface DevicesProps {
    deviceId: string | null;
    brandId: string | null;
    brand: string | null;
    modelId: string | null;
    model: string | null;
    colorId: string | null;
    color: string | null;
    storageId: string | null;
    storage: string | null;
    totalSold: number | string | null;
    gradeId: string | null;
    gradeName: string | null;
    gradeDescription: string | null;
    salePrice: number | string | null;
}

export interface BrandProps {
    brandId: string;
    brand: string;
    quantity: string;
}