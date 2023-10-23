<!--
 * @Author: ZhXIn
 * @Date: 2023-10-13 10:25:06
 * @LastEditTime: 2023-10-19 17:49:05
 * @Description: 面包屑组件
-->
<template>
  <a-breadcrumb style="margin: 16px 0">
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
      },
    },
  },
}
</script>

<style lang="less" scoped></style>