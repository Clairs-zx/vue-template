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
  parent: 'body',
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
    redirect: '/Home',
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login/BaseLogin.vue'),
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
          title: '首页',
        },
      },
      {
        path: '/Iconfont',
        name: 'Iconfont',
        component: () => import('@/views/Iconfont/index.vue'),
        meta: {
          title: '图标库',
        },
      },
      {
        path: '/Components',
        name: 'Components',
        component: () => import('@/views/Components/index.vue'),
        meta: {
          title: '基础组件',
        },
        children: [
          {
            path: 'Selector',
            name: 'Selector',
            component: () => import('@/views/Components/Selector/index.vue'),
            meta: {
              title: '选择器',
            },
          },
          {
            path: 'Table',
            name: 'Table',
            component: () => import('@/views/Components/Table/index.vue'),
            meta: {
              title: '表格',
            },
          },
          {
            path: 'Form',
            name: 'Form',
            component: () => import('@/views/Components/Form/index.vue'),
            meta: {
              title: '表单',
            },
            children: [
              {
                path: 'Form',
                name: 'Form',
                component: () =>
                  import('@/views/Components/Form/Form/Form.vue'),
                meta: {
                  title: 'Form表单',
                },
              },
              {
                path: 'FormModel',
                name: 'FormModel',
                component: () =>
                  import('@/views/Components/Form/FormModel/index.vue'),
                meta: {
                  title: 'FormModel表单',
                },
              },
            ],
          },
          {
            path: 'Tabs',
            name: 'Tabs',
            component: () => import('@/views/Components/Tabs/index.vue'),
            meta: {
              title: '标签页',
            },
          },
        ],
      },
      {
        path: '/Plugins',
        name: 'Plugins',
        component: () => import('@/views/Plugins/index.vue'),
        meta: {
          title: '第三方插件',
        },
        children: [
          {
            path: 'VJstree',
            name: 'VJstree',
            component: () => import('@/components/VJstree/index.vue'),
            meta: {
              title: 'VJstree',
            },
          },
          {
            path: 'Draggable',
            name: 'Draggable',
            component: () => import('@/components/Draggable/index.vue'),
            meta: {
              title: 'Draggable',
            },
          },
          {
            path: 'DraggablePlus',
            name: 'DraggablePlus',
            component: () => import('@/components/DraggablePlus/index.vue'),
            meta: {
              title: 'DraggablePlus',
            },
          },
          {
            path: 'SortableJS',
            name: 'SortableJS',
            component: () => import('@/components/SortableJS/index.vue'),
            meta: {
              title: 'SortableJS',
            },
          },
          {
            path: 'AntvX6',
            name: 'AntvX6',
            component: () => import('@/components/AntvX6/index.vue'),
            meta: {
              title: 'AntvX6',
            },
          },
          {
            path: 'Animate',
            name: 'Animate',
            component: () => import('@/components/Animate/index.vue'),
            meta: {
              title: 'Animate',
            },
          },
        ],
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  NProgress.done()
})

export default router
