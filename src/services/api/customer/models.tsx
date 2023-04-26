export type IndexType = {
    name: string;
    phone?: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
}

export interface CustomerProps {
    customerId: number;
    phone: string
    email: string
    website: string
    companyAddress: string
    city: string
    state: string
    zipCode: string
    stateCorporation: string
    businessIdentify: string
    federalTaxId: string
    acquisitionMethod: string
    photoId: string
    taxExemptCertificate: string
    status: string
}