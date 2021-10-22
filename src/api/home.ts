import api from '@/utils/http'

export function getInfo(data) { // 3231_login success
  return api.post("/Ucenter/Login/info", data, {type:'gateway'});
}