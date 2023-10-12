/*
 * @Author: ZhXIn
 * @Date: 2023-10-12 17:12:49
 * @LastEditTime: 2023-10-12 21:38:11
 * @Description:axios的二次封装
 */

import axios from 'axios'
import qs from 'qs'
import { baseURL } from '@/config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化最小百分比
  parent: 'body'
})

const createService = function (baseURL) {
  const _axios = axios.create({
    baseURL,
    timeout: 5 * 60 * 1000, // 超时时间
    // 请求参数序列化 eg:axios({url:'111',method:'get',params:{a:1,b:2}}) => url：111?a=1&b=2
    paramsSerializer: {
      serialize(params) {
        return qs.stringify(params, { allowDots: true }) // 允许参数为a.b.c的形式
      }
    }
  })

  // 定义请求拦截器
  _axios.interceptors.request.use(
    (config) => {
      // 在发请求之前做些什么：设置请求头token等
      NProgress.start()
      config.headers['Authorization'] = 'token'
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // 定义响应拦截器
  _axios.interceptors.response.use(
    (responce) => {
      NProgress.done()
      const res = responce.data
      // 根据响应的数据做一些判断,一般根据code做不同的处理
      if (res.code === 200) {
        return res.data
      } else {
        this.$message.error(res.msg)
        return Promise.reject(res.msg)
      }
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  return _axios
}

export default createService(baseURL)
