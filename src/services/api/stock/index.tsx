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

export default {
    insert
}