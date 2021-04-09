import request from '@/utils/request'
// 3231_login success
export function getInfo(params) {
  return request({
    url: '/Ucenter/Login/info',
    method: 'POST',
    data: params
  })
}