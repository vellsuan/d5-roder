//选择项
//验证
let moren=function () {

}
let verification={
  //正整数
  zheng(msg,callback=moren) {
    var reg = new RegExp("^(\\d|[1-9]\\d|100)$");

      let num=Number(msg);
      return reg.test(num)&&Number(num)>0&&num>=0&&num<=100
  },
  //正整数保留两位小数
  decimal(msg,callback=moren){

    let _z=/^[0-9]+([.]{1}[0-9]{1,2})?$/;

    return !_z.test(msg)

  },
   formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
    }
  }
  return fmt;
},
 padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

};

export default verification
