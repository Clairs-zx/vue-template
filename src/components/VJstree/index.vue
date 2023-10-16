<!--
 * @Author: ZhXIn
 * @Date: 2023-10-16 16:15:16
 * @LastEditTime: 2023-10-16 16:31:55
 * @Description: VJstree路由组件
-->
<template>
  <div>
    <a href="https://github.com/zdy1988/vue-jstree/blob/master/README-CN.md" target="_blank">参考链接</a>
    <Jstree />
  </div>
</template>

<script>
import Jstree from './components/Jstree.vue'
export default {
  components: {
    Jstree,
  },
}
</script>

<style>
</style>