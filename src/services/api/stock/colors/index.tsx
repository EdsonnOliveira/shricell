import api from '@api/index'
import { IndexType, ColorsProps } from './models'

const listAll = ({ brandId, modelId }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.post('devices/colors.php', { brandId, modelId })
        .then(response => {
            console.log(response)
            let res:ColorsProps[] = response.data.colors
            let array:ColorsProps[] = []

            for (let i = 0; i < res.length; i++ ) {
                let json: ColorsProps = {
                    colorId: res[i].colorId,
                    color: res[i].color
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