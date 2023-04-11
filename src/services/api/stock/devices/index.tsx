import api from '@api/index'
import { DevicesProps, IndexType } from './models'

const listAll = () => {
    return new Promise(async (resolve, reject) => {
        await api.get('devices/devices.php')
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
                    quantityStock: res[i].quantityStock,
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

const insert = ({ brandId, modelId, colorId, storageId, gradeId }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('devices/new-device.php', { brandId, modelId, colorId, storageId, gradeId })
        .then(response => {
            let res:DevicesProps[] = response.data
            resolve('success')
        })
        .catch((response) => reject(response))
    })
}
const toSellCardList = () => {
    return new Promise(async (resolve, reject) => {
        await api.post('devices/to-sell-card-list.php')
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
                    storageId: res[i].storageId,
                    storage: res[i].storage,
                    quantityStock: res[i].quantityStock,
                    gradeId: res[i].gradeId,
                    gradeName: res[i].gradeName,
                    salePrice: res[i].salePrice,
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
    insert,
    toSellCardList
}