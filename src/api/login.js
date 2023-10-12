/*
 * @Author: ZhXIn
 * @Date: 2023-10-12 19:07:05
 * @LastEditTime: 2023-10-12 21:41:40
 * @Description: 登录界面的请求api,
 */
import request from '@/utils/axios'

/**
 * @description: 用户登录api接口，不建议写成 request.post(xxx)，因为这样 post 时，无法 params 与 data 同时传参
 * @param {*} data
 * @return {*}
 */
export const signIn = function (data) {
  return request({
    url: '/user/signIn',
    method: 'post',
    data
  })
}
export const signOut = function (data) {
  return request({
    url: '/user/signOut',
    method: 'post',
    data
  })
}
