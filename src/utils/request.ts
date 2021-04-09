import axios from 'axios'
import { Toast } from 'vant'
import { baseUrl} from '@/config/config'
import qs from 'qs'

const service = axios.create({
  // baseURL:'http://api.ourclass.com.cn',
  baseURL:baseUrl(),
  timeout: 5000, // request timeout
})

// request interceptor 请求拦截
service.interceptors.request.use(
  config => {
    if(config.method === 'post'){
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor  响应拦截
service.interceptors.response.use(

  response => {
    const res = response.data

    return res
  },
  error => {
    console.log('response' + error) // for debug
    Toast.fail({
      message: error.message,
      duration: 1.5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
