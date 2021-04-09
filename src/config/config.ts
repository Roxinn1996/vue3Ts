//环境配置
// console.log(import.meta.env)
export const baseUrl = () =>{
  if(import.meta.env.DEV){
    return '/api'
  }
  if(import.meta.env.PROD){
    return 'http://api.ourclass.com.cn'
  }
}
