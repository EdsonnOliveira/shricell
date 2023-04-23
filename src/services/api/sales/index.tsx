import api from '@api/index'
import { IndexType, SaleProps } from './models'

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
    insert
}