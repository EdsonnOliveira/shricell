export type IndexType = {
    deviceId?: string;
    brandId?: string;
    modelId?: string;
    model?: string;
    colorId?: string;
    storageId?: string;
    gradeId?: string;
    dateStart?: string;
    dateEnd?: string;
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

export interface PriceProps {
    model: string;
    color: string;
    storage: string;
    gradeName: string;
    year: string
    month: string
    averagePrice: string;
}