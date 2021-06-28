import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `https://max-dev.tech/api`
    })
}
