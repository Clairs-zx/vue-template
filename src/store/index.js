/*
 * @Author: ZhXIn
 * @Date: 2023-10-12 11:49:18
 * @LastEditTime: 2023-10-12 12:08:49
 * @Description:vuex状态管理器文件(持久化)
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate' // vuex持久化
import { userInfo } from './userInfo'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		...userInfo,
	},
	plugins: [
		createPersistedState({
			// paths数组里面填模块名，存储指定模块
			paths: ['userInfo'],
		}),
	],
})
