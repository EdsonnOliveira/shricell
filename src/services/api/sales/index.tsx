import api from '@api/index'
import { BrandProps, DevicesProps, IndexType, SaleProps } from './models'

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
                    dateSale: res[i].dateSale,
                    dateTimeInsert: res[i].dateTimeInsert,
                    hash: res[i].hash,
                    saleCost: res[i].saleCost,
                    paymentReceipt: res[i].paymentReceipt,
                    status: res[i].status
                }
                array.push(json)
            }
            resolve(array || [])
        })
        .catch((response) => reject(response))
    })
}

const listAllPending = () => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/pending-sales.php')
        .then(response => {
            let res:SaleProps[] = response.data.pendingSales
            let array:SaleProps[] = []
            for (let i = 0; i < res.length; i++ ) {
                let json: SaleProps = {
                    saleId: res[i].saleId,
                    customerId: res[i].customerId,
                    companyName: res[i].companyName,
                    saleValue: res[i].saleValue,
                    dateSale: res[i].dateSale,
                    dateTimeInsert: res[i].dateTimeInsert,
                    hash: res[i].hash,
                    saleCost: res[i].saleCost,
                    paymentReceipt: res[i].paymentReceipt,
                    status: res[i].status
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
                    dateSale: res[i].dateSale,
                    dateTimeInsert: res[i].dateTimeInsert,
                    hash: res[i].hash,
                    saleCost: res[i].saleCost,
                    paymentReceipt: res[i].paymentReceipt,
                    status: res[i].status
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

const approve = ({ saleId }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/approve-sale.php', { saleId })
        .then(async response => {
            let res:SaleProps = response.data
            resolve(res.message)
        })
        .catch((response) => reject(response))
    })
}

const customerMonthly = ({ customerId }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/sales-by-customer-monthly.php', { customerId })
        .then(response => {
            let res:SaleProps = response.data
            resolve(res.totalSales)
        })
        .catch((response) => reject(response))
    })
}

const currentWeek = () => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/sales-current-week.php')
        .then(response => {
            let res:SaleProps[] = response.data.sales
            let array:SaleProps[] = []
            for (let i = 0; i < res?.length; i++ ) {
                let json: SaleProps = {
                    saleId: res[i].saleId,
                    customerId: res[i].customerId,
                    companyName: res[i].companyName,
                    saleValue: res[i].saleValue,
                    dateSale: res[i].dateSale,
                    dateTimeInsert: res[i].dateTimeInsert,
                    hash: res[i].hash,
                    saleCost: res[i].saleCost,
                    paymentReceipt: res[i].paymentReceipt,
                    status: res[i].status
                }
                array.push(json)
            }
            resolve(array || [])
        })
        .catch((response) => reject(response))
    })
}

const totalSold = ({ dateStart, dateEnd }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/total-sold.php', { dateStart, dateEnd })
        .then(response => {
            let res:SaleProps[] = response.data.total
            resolve(res)
        })
        .catch((response) => reject(response))
    })
}

const profit = ({ dateStart, dateEnd }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/profit.php', { dateStart, dateEnd })
        .then(response => {
            let res:SaleProps[] = response.data.profit
            resolve(res)
        })
        .catch((response) => reject(response))
    })
}

const bestSellerDevices = ({ dateStart, dateEnd }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/best-seller-devices.php', { dateStart, dateEnd })
        .then(response => {
            let res:DevicesProps[] = response.data.devices
            let array:DevicesProps[] = []
            for (let i = 0; i < res.length; i++ ) {
                let json: DevicesProps = {
                    deviceId: res[i].deviceId,
                    brandId: res[i].brandId,
                    brand: res[i].brand,
                    modelId: res[i].modelId,
                    model: res[i].model,
                    colorId: res[i].colorId,
                    color: res[i].color,
                    storageId: res[i].storageId,
                    storage: res[i].storage,
                    totalSold: res[i].totalSold,
                    gradeId: res[i].gradeId,
                    gradeName: res[i].gradeName,
                    gradeDescription: res[i].gradeDescription,
                    salePrice: res[i].salePrice,
                }
                array.push(json)
            }
            resolve(array)
        })
        .catch((response) => reject(response))
    })
}

const bestSellerBrands = ({ dateStart, dateEnd }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/best-seller-brands.php', { dateStart, dateEnd })
        .then(response => {
            let res:BrandProps[] = response.data.brands
            let array:BrandProps[] = []
            
            for (let i = 0; i < res.length; i++ ) {
                let json: BrandProps = {
                    brandId: res[i].brandId,
                    brand: res[i].brand,
                    quantity: res[i].quantity
                }
                array.push(json)
            }
            resolve(array)
        })
        .catch((response) => reject(response))
    })
}

export default {
    listAll,
    listAllPending,
    listAllCustomer,
    insert,
    approve,
    customerMonthly,
    currentWeek,
    totalSold,
    profit,
    bestSellerDevices,
    bestSellerBrands
}