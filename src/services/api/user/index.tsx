import api from '@api/index'
import { IndexType, LoginProps } from './models'

const login = ({ email, password }: IndexType) => {
    return new Promise(async (resolve, reject) => {
        await api.get('login', {
            data: { email, password }
        })
        .then((response) => {
            console.warn('---------')
            let res:LoginProps = response.data
            let json: LoginProps = {
                accessToken: res.accessToken,
                token_type: res.token_type,
                expiresIn: res.expiresIn,
                user: {
                    id: res.user.id,
                    name: res.user.name,
                    email: res.user.email,
                    emailVerifiedAt: res.user.emailVerifiedAt,
                    createdAt: res.user.createdAt,
                    updatedAt: res.user.updatedAt
                }
            }
            resolve(json)
        })
        .catch((response) => reject(response))
    })
}

export default {
    login
}