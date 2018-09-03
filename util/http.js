// 封装http请求
import { config } from '../config.js'

const tips = {
  1: '抱歉,出现了一个错误',
  403: '接口异常'
}
class HTTP {
  request(params) {
    if(!params.method){
      params.method = 'GET'
    }
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json'
      },
      success:(res) => {
        // 获取状态码
        let code = res.statusCode.toString()
        // startsWith:以什么开头
        // endsWith
        if(code.startsWith('2')){
          params.success(res.data)
        }else{
          // 
          let error_code = res.data.error_code
          this._show_err(403)
        }
      },
      fail:(err) => {
        this._show_err(1)
      }
    })
  }
  // 私有方法
  _show_err(error_code) {
    // 如果error_code不存在默认为1
    if(!error_code) {
      error_code = 1
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
}

export { HTTP }