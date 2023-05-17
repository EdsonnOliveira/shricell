import api from '@api/index'
import { IndexType, CartProps } from './models'
import devices from '../../stock/devices'

const listAll = ({ customerId }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/cart.php', { customerId })
        .then(async response => {
            let res:CartProps[] = response.data.cart
            let array:CartProps[] = []

            for (const data of res) {
                let json: CartProps
                await devices.select({
                    deviceId: data.device?.deviceId
                }).then((dataDevice) => {
                    json = {
                        itemsId: data.itemsId,
                        deviceId: data.device?.deviceId,
                        colorId: data.device?.colorId,
                        // @ts-ignore
                        brand: data.device?.brand,
                        // @ts-ignore
                        model: data.device?.model,
                        // @ts-ignore
                        storage: data.device?.storage,
                        // @ts-ignore
                        gradeName: data.device?.gradeName,
                        quantity: data.quantity,
                        costPrice: data.costPrice,
                        salePrice: data.salePrice,
                        // @ts-ignore
                        color: [
                            {
                                deviceId: data.device?.deviceId,
                                colorId: data.device?.colorId,
                                color: data.device?.color,
                                name: data.device?.color,
                                // @ts-ignore
                                quantity: dataDevice.quantityStock,
                                price: data.salePrice
                            }
                        ]
                    }
                })
                // @ts-ignore
                array.push(json)
            }

            resolve(array)
        })
        .catch((response) => reject(response))
    })
}

const total = ({ customerId }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/cart-totals.php', { customerId })
        .then(response => {
            let res:CartProps = response.data

            resolve({
                totalQuantity: res.totalQuantity,
                totalValue: res.totalValue
            })
        })
        .catch((response) => reject(response))
    })
}

const insert = ({ customerId, deviceId, quantity, salePrice }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/add-cart.php', { customerId, deviceId, quantity, salePrice })
        .then((response) => {
            let res: CartProps = response.data
            resolve(res)
        })
        .catch((response) => reject(response))
    })
}

const remove = ({ deviceId, customerId }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/remove-cart.php', { deviceId, customerId })
        .then((response) => {
            let res: CartProps = response.data
            resolve(res)
        })
        .catch((response) => reject(response))
    })
}

const update = ({ deviceId, customerId, quantity }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/update-cart.php', { deviceId, customerId, quantity })
        .then((response) => {
            let res: CartProps = response.data
            resolve(res)
        })
        .catch((response) => reject(response))
    })
}

export default {
    listAll,
    insert,
    total,
    remove,
    update
}