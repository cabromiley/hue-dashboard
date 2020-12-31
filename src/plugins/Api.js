import axios from 'axios'
import Api from '../api/home-api'

export default (Vue, options) => {
  const http = axios.create({
    baseURL: options.host,
    withCredentials: true
  })

  const api = new Api(http, options)

  api.csrf()

  Vue.prototype.$api = api
}
