export interface IndexProps {
    data: Data;
}

export type StockTypes = IndexProps;

type Data = {
    deviceId: string | number;
    brandId: string | number;
    brand: string | number;
    modelId: string | number;
    model: string | number;
    colorId: string | number;
    color: string | number;
    storageId: string | number;
    storage: string | number;
    quantityStock: string | number;
    gradeId: string | number;
    gradeName: string | number;
    gradeDescription: string | number;
    salePrice: string | number;
}