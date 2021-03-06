/**
 *  因为很多jquery用起来还是很方便的,
 *  还是利用起来比较好,为了防止以后可能有替换的方法,还是统一集合起来
 *  集合一些工具类
 */
import jQuery from 'jquery'
import config from '@/config/index'
import { Message } from 'iview'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

jQuery.ajaxSetup({
  async: false
})

export const syGet = (url) => {
  if (!url) {
    Message.warning('地址不允许为空')
    return
  }
  url = baseUrl + url
  var result = {}
  jQuery.get(url, function (data) {
    if (data.code === 200) {
      result = data.data
    } else {
      if (data.msg) Message.error(data.msg)
    }
  })
  return result
}
