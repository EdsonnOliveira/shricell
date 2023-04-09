import { BrandType } from "@atomic/constants/brand";

export type ItemsCart = {
    brand: BrandType;
    name: string;
    storage: string;
    grade: string;
    price: string;
    quantity: string;
    colors: ColorsType[];
}

type ColorsType = {
    name: string;
    color: string | undefined;
    quantity: string;
    price: string;
}