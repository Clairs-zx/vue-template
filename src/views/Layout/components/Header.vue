<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => $emit('onCollapsed')" />
    <Breadcrumb style="display: inline-block" />
  </a-layout-header>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Header',
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Breadcrumb,
  },
}
</script>

<style lang="less" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>