export type IndexType = {
    id?: string
    name: string;
    phone?: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
}

export interface SupplierProps {
    supplierId: string;
    supplierName: string;
    supplierPhone: string;
    supplierEmail: string;
    supplierAddress: string;
    supplierCity: string;
    supplierState: string;
    supplierZipCode: string;
}