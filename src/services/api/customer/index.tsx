import api from '@api/index'
import { IndexType, CustomerProps } from './models'

const listAll = () => {
    return new Promise(async (resolve, reject) => {
        await api.get('customers/customers.php')
        .then(response => {
            let res:CustomerProps[] = response.data.customers
            let array:CustomerProps[] = []

            for (let i = 0; i < res.length; i++ ) {
                let json: CustomerProps = {
                    customerId: res[i].customerId,
                    companyName: res[i].companyName,
                    phone: res[i].phone,
                    email: res[i].email,
                    website: res[i].website,
                    companyAddress: res[i].companyAddress,
                    city: res[i].city,
                    state: res[i].state,
                    zipCode: res[i].zipCode,
                    stateCorporation: res[i].stateCorporation,
                    businessIdentify: res[i].businessIdentify,
                    federalTaxId: res[i].federalTaxId,
                    acquisitionMethod: res[i].acquisitionMethod,
                    photoId: res[i].photoId,
                    taxExemptCertificate: res[i].taxExemptCertificate,
                    status: res[i].status
                }
                array.push(json)
            }
            resolve(array)
        })
        .catch((response) => reject(response))
    })
}

const insert = ({ name, phone, email, address, city, state, zipCode }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('supplier/new-supplier.php', { name, phone, email, address, city, state, zipCode })
        .then((response) => {
            // @ts-ignore
            let res:SupplierProps = response.data
            resolve('success')
        })
        .catch((response) => reject(response))
    })
}

const best = () => {
    return new Promise(async (resolve, reject) => {
        await api.get('customers/best-customers.php')
        .then(response => {
            let res:CustomerProps[] = response.data.customers
            let array:CustomerProps[] = []

            for (let i = 0; i < res?.length; i++ ) {
                let json: CustomerProps = {
                    customerId: res[i].customerId,
                    companyName: res[i].companyName,
                    phone: res[i].phone,
                    email: res[i].email,
                    website: res[i].website,
                    companyAddress: res[i].companyAddress,
                    city: res[i].city,
                    state: res[i].state,
                    zipCode: res[i].zipCode,
                    stateCorporation: res[i].stateCorporation,
                    businessIdentify: res[i].businessIdentify,
                    federalTaxId: res[i].federalTaxId,
                    acquisitionMethod: res[i].acquisitionMethod,
                    photoId: res[i].photoId,
                    taxExemptCertificate: res[i].taxExemptCertificate,
                    status: res[i].status,
                    totalOrders: res[i].totalOrders,
                    totalValue: res[i].totalValue
                }
                array.push(json)
            }
            resolve(array || [])
        })
        .catch((response) => reject(response))
    })
}

export default {
    listAll,
    insert,
    best
}