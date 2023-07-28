import api from '@api/index'
import { BankProps } from './models'

const listAll = () => {
    return new Promise(async (resolve, reject) => {
        await api.get('bank/banks.php')
        .then(response => {
            let res:BankProps[] = response.data.banks
            let array:BankProps[] = []

            for (let i = 0; i < res?.length; i++ ) {
                let json: BankProps = {
                    bankId: res[i].bankId,
                    bank: res[i].bank,
                    accountNumber: res[i].accountNumber,
                    routingNumber: res[i].routingNumber,
                    businessName: res[i].businessName,
                    businessAddress: res[i].businessAddress
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