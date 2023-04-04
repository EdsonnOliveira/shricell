import api from '@api/index'
import { GradesProps } from './models'

const listAll = () => {
    return new Promise(async (resolve, reject) => {
        await api.get('devices/grades.php')
        .then(response => {
            let res:GradesProps[] = response.data.grades
            let array:GradesProps[] = []

            for (let i = 0; i < res.length; i++ ) {
                let json: GradesProps = {
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
    listAll
}