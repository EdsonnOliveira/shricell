export type IndexType = {
    deviceId?: string;
    brandId?: string;
    modelId?: string;
    colorId?: string;
    storageId?: string;
    gradeId?: string;
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
    quantityStock: number | string | null;
    gradeId: string | null;
    gradeName: string | null;
    gradeDescription: string | null;
    salePrice: number | string | null;
}