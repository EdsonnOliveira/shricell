export interface IndexProps {
    data: Data;
}

export type CustomersTypes = IndexProps;

type Data = {
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
}