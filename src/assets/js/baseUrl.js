//获取地址栏参数
const getQueryString = (name) => {
  // var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
  // var r = window.location.search.substr(1).match(reg); 
  // if (r != null) return unescape(r[2]); return null; 
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}

const api = 'test.psp.xxxx.com.cn'

export {   //导出
  getQueryString,
  api
}
