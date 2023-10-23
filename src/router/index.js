/*
 * @Author: ZhXIn
 * @Date: 2023-10-11 19:22:13
 * @LastEditTime: 2023-10-19 17:47:54
 * @Description:路由配置文件
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
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

// 解决在使用vue-router路由跳转相同路径而报错问题
// Push
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

//Replace
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login/BaseLogin.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Layout/BaseHome.vue'),
    redirect: 'HomePage',
    children: [
      {
        path: '/',
        name: 'HomePage',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/Components',
        name: 'Components',
        component: () => import('@/views/Components/index.vue'),
        redirect: '/Components/Table',
        meta: {
          title: '基础组件'
        },
        children: [
          {
            path: 'Table',
            name: 'Table',
            component: () => import('@/views/Components/Table/index.vue'),
            meta: {
              title: '表格'
            }
          },
          {
            path: 'Form',
            name: 'Form',
            redirect: '/Components/Form/AForm',
            meta: {
              title: '表单'
            },
            children: [
              {
                path: 'AForm',
                name: 'AForm',
                component: () => import('@/views/Components/Form/Aform.vue'),
                meta: {
                  title: 'a-form组件'
                }
              }
            ]
          }
        ]
      },
      {
        path: '/Plugins',
        name: 'Plugins',
        component: () => import('@/views/Plugins/index.vue'),
        meta: {
          title: '第三方插件'
        },
        children: [
          {
            path: 'VJstree',
            name: 'VJstree',
            component: () => import('@/components/VJstree/index.vue'),
            meta: {
              title: 'VJstree'
            }
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  NProgress.done()
})

export default router
