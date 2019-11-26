//获取地址栏参数,页面链接,https://i.cnblogs.com/EditPosts.aspx?opt=1 getQueryString(opt); 结果  1
const getQueryString = (name) => {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
  // let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  // let r = window.location.search.substr(1).match(reg);
  // if (r != null) return unescape(r[2]);
  // return null;
}

export {   //导出
  getQueryString
}
