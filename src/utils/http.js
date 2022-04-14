/**
 * 封装通用的工具函数 ajax请求
 */

import axios from 'axios'
import { Toast } from 'antd-mobile'

// 设置请求的服务器根路径
//  axios.defaults.baseURL = 'http://127.0.0.1:9000'
// axios.defaults.baseURL = 'http://192.168.1.101:8081'; // 设置全局默认基本信息
axios.defaults.headers['Content-Type'] = 'application/json';


// 封装get和post请求
export default {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params })
        .then(response => {
          resolve(response.data) // 处理请求成功的结果
        })
        .catch(err => {
          Toast.fail(err)
          reject(err) // 处理请求失败的错误信息
        })
    })
  },
  post(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(response => {
          resolve(response.data) // 处理请求成功的结果
        })
        .catch(err => {
          reject(err) // 处理请求失败的错误信息
        })
    })
  }
}