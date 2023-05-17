import api from '@api/index'
import { StockProps, IndexType } from './models'

const insert = ({ supplierId, deviceId, quantity, unitPrice, annotation }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('stock/add-stock.php', { supplierId, deviceId, quantity, unitPrice, annotation })
        .then(response => {
            let res:StockProps[] = response.data
            resolve('success')
        })
        .catch((response) => reject(response))
    })
}

const outOfStock = () => {
    return new Promise(async (resolve, reject) => {
        await api.post('stock/out-of-stock.php')
        .then(response => {
            let res:StockProps[] = response.data
            let array:StockProps[] = []

            for (let i = 0; i < res.length; i++ ) {
                // @ts-ignore
                let json: StockProps = {
                    stockId: res[i].stockId
                }
                array.push(json)
            }
            
            resolve(array)
        })
        .catch((response) => reject(response))
    })
}

export default {
    insert,
    outOfStock
}