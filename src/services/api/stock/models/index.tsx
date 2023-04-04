import api from '@api/index'
import { IndexType, ModelsProps } from './models'

const listAll = ({ brandId }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('devices/models.php', { brandId })
        .then(response => {
            console.log(response)
            let res:ModelsProps[] = response.data.models
            let array:ModelsProps[] = []

            for (let i = 0; i < res.length; i++ ) {
                let json: ModelsProps = {
                    modelId: res[i].modelId,
                    model: res[i].model
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