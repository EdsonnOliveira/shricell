import api from '@api/index'
import { BrandProps } from './models'

const listAll = () => {
    return new Promise(async (resolve, reject) => {
        await api.get('devices/brands.php')
        .then(response => {
            let res:BrandProps[] = response.data
            let array:BrandProps[] = []

            for (let i = 0; i < res.length; i++ ) {
                let json: BrandProps = {
                    brandId: res[i].brandId,
                    brand: res[i].brand
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