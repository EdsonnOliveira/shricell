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

const select = ({ deviceId }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('devices/device.php', { deviceId })
        .then(response => {
            let res:DevicesProps[] = response.data.device

            let json: DevicesProps = {
                deviceId: res[0].deviceId,
                brandId: res[0].brandId,
                brand: res[0].brand,
                modelId: res[0].modelId,
                model: res[0].model,
                colorId: res[0].colorId,
                color: res[0].color,
                storageId: res[0].storageId,
                storage: res[0].storage,
                quantityStock: res[0].quantityStock,
                gradeId: res[0].gradeId,
                gradeName: res[0].gradeName,
                gradeDescription: res[0].gradeDescription,
                salePrice: res[0].salePrice,
            }
            resolve(json)
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
                    brandId: String(data.brandId),
                    modelId: String(data.modelId),
                    storageId: String(data.storageId),
                    gradeId: String(data.gradeId)
                })
                // @ts-ignore
                .then((data: DevicesProps[]) => {
                    colors = data.map(item => (
                        {
                            deviceId: item.deviceId,
                            colorId: item.colorId,
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
                    // @ts-ignore
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
    select,
    insert,
    toSellCardList,
    toSell
}