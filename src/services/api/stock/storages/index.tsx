import api from '@api/index'
import { StoragesProps } from './models'

const listAll = () => {
    return new Promise(async (resolve, reject) => {
        await api.get('devices/storages.php')
        .then(response => {
            let res:StoragesProps[] = response.data.storages
            let array:StoragesProps[] = []

            for (let i = 0; i < res.length; i++ ) {
                let json: StoragesProps = {
                    storageId: res[i].storageId,
                    storage: res[i].storage
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