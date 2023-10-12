/*
 * @Author: ZhXIn
 * @Date: 2023-10-12 11:49:18
 * @LastEditTime: 2023-10-12 22:51:39
 * @Description:项目入口文件
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/style/index.less'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
