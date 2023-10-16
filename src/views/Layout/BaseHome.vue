<!--
 * @Author: ZhXIn
 * @Date: 2023-10-12 23:17:08
 * @LastEditTime: 2023-10-13 11:26:32
 * @Description: 主页Layout布局
-->
<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible breakpoint="lg">
      <div class="logo" :class="collapsed ? 'sm-logo' : 'lg-logo'">{{ collapsed ? 'Antd' : 'Ant Design Vue' }}</div>
      <SideMenu />
    </a-layout-sider>
    <a-layout>
      <Header :collapsed="collapsed" @onCollapsed="collapsed = !collapsed" />
      <a-layout-content style="margin: 16px 16px 0">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '650px' }">Bill is a cat.</div>
      </a-layout-content>
      <Footer />
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from './components/SideMenu.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer'
export default {
  name: 'HomePage',
  components: {
    SideMenu,
    Header,
    Footer,
  },
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
#components-layout-demo-side {
  .logo {
    height: 32px;
    margin: 16px;
    color: #fff;
    line-height: 32px;
    text-align: center;
    &.lg-logo {
      font-weight: bolder;
      font-size: 20px;
    }
    &.sm-logo {
      font-weight: bold;
      font-size: 14px;
    }
  }
}
</style>
