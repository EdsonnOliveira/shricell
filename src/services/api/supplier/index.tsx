import api from '@api/index'
import { IndexType, SupplierProps } from './models'

const listAll = () => {
    return new Promise(async (resolve, reject) => {
        await api.get('supplier/suppliers.php')
        .then(response => {
            let res:SupplierProps[] = response.data.suppliers
            let array:SupplierProps[] = []

            for (let i = 0; i < res.length; i++ ) {
                let json: SupplierProps = {
                    supplierId: res[i].supplierId,
                    supplierName: res[i].supplierName,
                    supplierPhone: res[i].supplierPhone,
                    supplierEmail: res[i].supplierEmail,
                    supplierAddress: res[i].supplierAddress,
                    supplierCity: res[i].supplierCity,
                    supplierState: res[i].supplierState,
                    supplierZipCode: res[i].supplierZipCode
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
            let res:SupplierProps = response.data
            resolve('success')
        })
        .catch((response) => reject(response))
    })
}

const update = ({ id, name, phone, email, address, city, state, zipCode }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('supplier/edit-supplier.php', { supplierId: id, name, phone, email, address, city, state, zipCode })
        .then((response) => {
            let res:SupplierProps = response.data
            resolve('success')
        })
        .catch((response) => reject(response))
    })
}

const autoComplete = ({name}: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('supplier/auto-complete-supplier.php', { name })
        .then(response => {
            let res:SupplierProps[] = response.data.suppliers
            let array:SupplierProps[] = []

            for (let i = 0; i < res.length; i++ ) {
                let json: SupplierProps = {
                    supplierId: res[i].supplierId,
                    supplierName: res[i].supplierName,
                    supplierPhone: res[i].supplierPhone,
                    supplierEmail: res[i].supplierEmail,
                    supplierAddress: res[i].supplierAddress,
                    supplierCity: res[i].supplierCity,
                    supplierState: res[i].supplierState,
                    supplierZipCode: res[i].supplierZipCode
                }
                array.push(json)
            }
            resolve(array)
        })
        .catch((response) => reject(response))
    })
}

const best = () => {
    return new Promise(async (resolve, reject) => {
        await api.get('supplier/best-suppliers.php')
        .then(response => {
            let res:SupplierProps[] = response.data.suppliers
            let array:SupplierProps[] = []

            for (let i = 0; i < res?.length; i++ ) {
                let json: SupplierProps = {
                    supplierId: res[i].supplierId,
                    supplierName: res[i].supplierName,
                    supplierPhone: res[i].supplierPhone,
                    supplierEmail: res[i].supplierEmail,
                    supplierAddress: res[i].supplierAddress,
                    supplierCity: res[i].supplierCity,
                    supplierState: res[i].supplierState,
                    supplierZipCode: res[i].supplierZipCode,
                    totalQuantity: res[i].totalQuantity,
                    totalBought: res[i].totalBought,
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
    update,
    autoComplete,
    best
}