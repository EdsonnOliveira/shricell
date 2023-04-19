export type IndexType = {
    itemsId?: string | number;
    customerId?: string | number;
    deviceId?: string | number;
    quantity?: string;
    salePrice?: string
}

export interface CartProps {
    status?: string;
    message?: string;
    itemsId?: string | number;
    deviceId?: string | number;
    colorId?: string | number;
    quantity?: string;
    costPrice?: string;
    salePrice?: string;
    brandId: string;
    brand: string;
    modelId: string;
    model: string;
    color: string;
    storageId: string;
    storage: string;
    quantityStock: number | string;
    gradeId: string;
    gradeName: string;
    gradeDescription: string;
    totalQuantity?: string | number;
    totalValue?: string | number;
    device?: {
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
}