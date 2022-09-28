/*
 * @Description:
 * @Autor: 王敏
 * @LastEditTime: 2021-12-10 11:37:41
 */
// 时间日期转化器
export const CUSTOMDATE = (now, type, separate) => { // type
  now = new Date(now)
  separate = separate || '/'
  const day = now.getDay()
  const year = now.getFullYear()
  const month = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1)
  const date = now.getDate() > 9 ? now.getDate() : '0' + now.getDate()
  const hour = now.getHours() > 9 ? now.getHours() : '0' + now.getHours()
  const minute = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes()
  const second = now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds()
  // eslint-disable-next-line no-array-constructor
  const weeks = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六')
  if (type === 1) return year + separate + month + separate + date
  else if (type === 2) return [year + separate + month + separate + date, weeks[day] + ' ' + +hour + ':' + minute + ':' + second]
  else return year + separate + month + separate + date + ' ' + hour + ':' + minute + ':' + second
}
