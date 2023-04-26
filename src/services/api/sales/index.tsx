import api from '@api/index'
import { IndexType, SaleProps } from './models'

const listAll = () => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/sales.php')
        .then(response => {
            let res:SaleProps[] = response.data.sales
            let array:SaleProps[] = []
            for (let i = 0; i < res.length; i++ ) {
                let json: SaleProps = {
                    saleId: res[i].saleId,
                    customerId: res[i].customerId,
                    companyName: res[i].companyName,
                    saleValue: res[i].saleValue,
                    dateTimeInsert: res[i].dateTimeInsert,
                    hash: res[i].hash,
                    saleCost: res[i].saleCost,
                    paymentReceipt: res[i].paymentReceipt
                }
                array.push(json)
            }
            resolve(array || [])
        })
        .catch((response) => reject(response))
    })
}

const listAllCustomer = ({ customerId }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/sales-customer.php', { customerId })
        .then(response => {
            let res:SaleProps[] = response?.data?.sales
            let array:SaleProps[] = []

            for (let i = 0; i < res?.length; i++ ) {
                let json: SaleProps = {
                    saleId: res[i].saleId,
                    customerId: res[i].customerId,
                    companyName: res[i].companyName,
                    saleValue: res[i].saleValue,
                    dateTimeInsert: res[i].dateTimeInsert,
                    hash: res[i].hash,
                    saleCost: res[i].saleCost,
                    paymentReceipt: res[i].paymentReceipt
                }
                array.push(json)
            }
            resolve(array)
        })
        .catch((response) => reject(response))
    })
}

const insert = ({ customerId, paymentReceipt }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/new-sale.php', { customerId, paymentReceipt }, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then(async response => {
            let res:SaleProps = response.data
            resolve(res.message)
        })
        .catch((response) => reject(response))
    })
}

export default {
    listAll,
    listAllCustomer,
    insert
}