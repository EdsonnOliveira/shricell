export type IndexType = {
    customerId?: string | number;
    saleId?: string | number;
    paymentReceipt?: FileList | null;
}

export interface ItemsProps {
    itemsId?: string | number;
    device: {
        deviceId: string;
        brandId: string;
        brand: string;
        modelId: string;
        model: string;
        colorId: string;
        color: string;
        storageId: string;
        storage: string;
        gradeId: string;
        gradeName: string;
        gradeDescription: string;
        quantityStock: number | string;
    }
    quantity: string;
    costPrice?: string;
    salePrice?: string;
    costTotal?: string;
    saleTotal?: string;

    deviceId?: string | number;
    colorId?: string | number;
    brandId: string;
    brand: string;
    modelId: string;
    model: string;
    color: string;
    storageId: string;
    storage: string;
    gradeId: string;
    gradeName: string;
    gradeDescription: string;
}