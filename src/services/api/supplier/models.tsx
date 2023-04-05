export type IndexType = {
    name: string;
    phone: string;
    email: string;
    address: string;
    city?: string;
    state?: string;
    zipCode?: string;
}

export interface SupplierProps {
    supplierName: string;
    supplierPhone: string;
    supplierEmail: string;
    supplierAddress: string;
    supplierCity: string;
    supplierState: string;
    supplierZipCode: string;
}