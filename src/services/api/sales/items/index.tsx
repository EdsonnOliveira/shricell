import api from '@api/index'
import { IndexType, ItemsProps } from './models'

const listAll = ({ customerId, saleId }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('sales/sale-items.php', { customerId, saleId })
        .then(response => {
            let res:ItemsProps[] = response?.data?.salesItems
            let array:ItemsProps[] = []

            for (let i = 0; i < res?.length; i++ ) {
                let json: ItemsProps = { 
                    deviceId: res[i].device.deviceId,
                    brandId: res[i].device.brandId,
                    brand: res[i].device.brand,
                    modelId: res[i].device.modelId,
                    model: res[i].device.model,
                    colorId: res[i].device.colorId,
                    color: res[i].device.color,
                    storageId: res[i].device.storageId,
                    storage: res[i].device.storage,
                    gradeId: res[i].device.gradeId,
                    gradeName: res[i].device.gradeName,
                    gradeDescription: res[i].device.gradeDescription,
                    quantity: res[i].quantity,
                    costPrice: res[i].costPrice,
                    salePrice: res[i].salePrice,
                    costTotal: res[i].costTotal,
                    saleTotal: res[i].saleTotal
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
}