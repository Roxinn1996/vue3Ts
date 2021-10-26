import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'

const apiTypes = {
  base: import.meta.env.VITE_API,
  gateway: import.meta.env.VITE_DEMO_API,
}

const service:any = axios.create({
  baseURL: '/',
  timeout: 10000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  validateStatus: (status) => status === 200,
})

const loadingVex = (data:boolean) =>{
  store.commit('setting/set_isLoading',data)
}

// request interceptor 请求拦截
service.interceptors.request.use(
  config => {
    const type = config.type || 'base'
    config.baseURL = apiTypes[type] || ''

    //api如果需要关闭loading则设置 closeLoading ，默认不关闭
    if(!config.closeLoading) loadingVex(true);
    return config
  },
  error => {
    loadingVex(false)
    return Promise.reject(error)
  }
)

// response interceptor  响应拦截
service.interceptors.response.use(

  response => {
    const res = response.data
    loadingVex(false)
    return res
  },
  error => {
    console.log('response' + error) // for debug
    loadingVex(false)
    Toast.fail({
      message: error.message,
      duration: 1.5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
