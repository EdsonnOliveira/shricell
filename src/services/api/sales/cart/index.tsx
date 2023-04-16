import api from '@api/index'
import { IndexType, CartProps } from './models'

const listAll = ({ customerId }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/cart.php', { customerId })
        .then(response => {
            let res:CartProps[] = response.data.cart
            let array:CartProps[] = []

            for (let i = 0; i < res.length; i++ ) {
                let json: CartProps = {
                    itemsId: res[i].itemsId,
                    deviceId: res[i].deviceId,
                    quantity: res[i].quantity,
                    costPrice: res[i].costPrice,
                    salePrice: res[i].salePrice
                }
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

export default {
    listAll,
    insert,
    total
}