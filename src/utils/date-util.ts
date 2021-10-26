// 时间转换
import * as dayjs from 'dayjs'
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
const DATE_FORMAT = 'YYYY-MM-DD ';

//时间戳(秒)转换
export function stampToDateISO(dataTime, format = DATE_TIME_FORMAT):string { 
  return dayjs.unix(dataTime).format(format)
} 