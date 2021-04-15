import request from '@/utils/request'

export function getInfo(params) { // 3231_login success
  return request({
    url: '/Ucenter/Login/info',
    method: 'POST',
    data: params,
    // closeLoading: true
  })
}