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
        .then(async response => {
            let res:DevicesProps[] = response.data.devices
            let array:DevicesProps[] = []

            for (const data of res) {
                let colors;
                let json: DevicesProps
                await toSell({
                    brandId: data.brandId,
                    modelId: data.modelId,
                    storageId: data.storageId,
                    gradeId: data.gradeId
                })
                .then((data: DevicesProps[]) => {
                    colors = data.map(item => (
                        {
                            color: item.color,
                            name: item.color,
                            quantity: item.quantityStock,
                            price: item.salePrice
                        }
                    ))
                })

                json = {
                    deviceId: data.deviceId,
                    brandId: data.brandId,
                    brand: data.brand,
                    modelId: data.modelId,
                    model: data.model,
                    storageId: data.storageId,
                    storage: data.storage,
                    quantityStock: data.quantityStock,
                    gradeId: data.gradeId,
                    gradeName: data.gradeName,
                    salePrice: data.salePrice,
                    color: colors
                }
                array.push(json)
            }
            resolve(array)
        })
        .catch((response) => reject(response))
    })
}

const toSell = ({ brandId, modelId, storageId, gradeId }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('devices/to-sell-devices.php', { brandId, modelId, storageId, gradeId })
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
                    salePrice: res[i].salePrice,
                    gradeId: res[i].gradeId,
                    gradeName: res[i].gradeName,
                    gradeDescription: res[i].gradeDescription
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
    toSellCardList,
    toSell
}