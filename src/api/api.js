import axios from "axios";
import config from "./config.js";
import qs from "qs";
const base = "/org/business/"; // 更改的base
/**
 * @description 封装了axios的调用方式，得到的直接是接口返回的数据，对于code
 * 这里做了判断
 * @author 刘欢
 * @class API
 */
let branch = '0'
//request  拦截器
axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  config.headers['developToken'] = '000006'
  config.headers['tokenPassword'] = '1qaz2wsx'
  branch = '0'
  if(localStorage['vuex'] && JSON.parse(localStorage['vuex']).userInfo && JSON.parse(localStorage['vuex']).userInfo.shop){
    branch =  JSON.parse(localStorage['vuex']).userInfo.shop.branch
  }
  if(config.method === 'post') {
    config.data = qs.stringify( {
      branch:branch,
      channel:'1',
      ...config.data
    })
  }
  return config;

}, function (error) {

  return Promise.reject(error)
})


class API {

  post(params, callback, errcallback,mork=true) {


    config.data = params.data || {};
    let url='';
    if(mork){
       url=`${base}${params.url}.do`
    }else{
       url='http://117.78.40.253:8981/mockjsdata/23/'
    }

    return axios
      .post(url, config.data, config)
      .then(res => {
        console.log(res)
        let rst = res.data;
        if (rst.code === "000000") {
          callback && callback(rst.result || {});
        } else {
          console.log(rst.message);
          errcallback && errcallback(rst.message || {});
        }
      }, function(error) {
        console.log(error)
        // failure
      })
      .catch(e => {
        console.log(e);
      });
  }

  get(params, callback, errcallback) {
    config.data = params.data || {};
    branch = '0'
    if(localStorage['vuex'] && JSON.parse(localStorage['vuex']).userInfo.shop && JSON.parse(localStorage['vuex']).userInfo.shop){
      branch =  JSON.parse(localStorage['vuex']).userInfo.shop.branch
    }
    return axios
      .get(`${base}${params.url}.do`, { params: {branch:branch,channel:'1',...config.data} }, config)
      .then(res => {
        let rst = res.data;
        if (rst.code === "000000") {
          callback && callback(rst.result || {});
        } else {
          console.log(rst.message);
          errcallback && errcallback(rst.message || {});
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
}
const api = new API();

export default api;
