export type IndexType = {
    duns?: string;
    taxID?: string;
    businessID?: string;
    name?: string;
    phone?: string;
    email?: string;
    address?: string;
    website?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    typeIndustry?: string;
    stateCorporation?: string;
    customerId?: number;
    status?: 'APPROVED' | 'DENIED';
}

export interface CustomerProps {
    customerId: number;
    companyName: string
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
    totalOrders?: string;
    totalValue?: string;
}