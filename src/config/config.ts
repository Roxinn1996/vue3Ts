//环境配置
export const baseUrl = () =>{
  if(import.meta.env.DEV){
    return '/api'
  }
  if(import.meta.env.PROD){
    return 'http://api.ourclass.com.cn'
  }
}
//插件设置
export const settings =  {
  vconsole: false,
  // fixedHeader: false,
  // needPageTrans: true,
}
