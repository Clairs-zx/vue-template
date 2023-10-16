<!--
 * @Author: ZhXIn
 * @Date: 2023-10-13 10:25:06
 * @LastEditTime: 2023-10-16 16:02:56
 * @Description: 面包屑组件
-->
<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item>
      <router-link to="/Home">首页</router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(path, index) in paths" :key="index">
      <span v-if="index === paths.length - 1">{{ path.meta.title }}</span>
      <router-link v-else :to="path.path">{{ path.meta.title }}</router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      paths: [],
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.paths = []
        this.$route.matched.forEach((item) => {
          if (item.meta.title) {
            this.paths.push(item)
          }
        })
        this.paths.shift()
      },
    },
  },
}
</script>

<style lang="less" scoped>
.breadcrumb-fade-enter-active,
.breadcrumb-fade-leave-active {
  transition: opacity 0.5s;
}
.breadcrumb-fade-enter, .breadcrumb-fade-leave-to /* .breadcrumb-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>