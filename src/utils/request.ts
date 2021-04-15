import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'
import { baseUrl} from '@/config/config'
import qs from 'qs'

const service:any = axios.create({
  // baseURL:'http://api.ourclass.com.cn',
  baseURL:baseUrl(),
  timeout: 10000, // request timeout
})
const loadingVex = (data:boolean) =>{
  store.commit('setting/set_isLoading',data)
}
// request interceptor 请求拦截
service.interceptors.request.use(
  config => {
    if(config.method === 'post'){
      config.data = qs.stringify(config.data)
    }
    if(!config.closeLoading){  //api如果需要关闭loading则设置 closeLoading ，默认不关闭
      loadingVex(true)
    }
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
