import api from '@api/index'
import { DevicesProps } from './models'

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

export default {
    listAll
}