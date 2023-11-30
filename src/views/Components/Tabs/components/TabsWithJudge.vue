<template>
  <a-tabs :activeKey="activeKey" @change="handleChange">
    <a-tab-pane key="1" tab="标签页1">标签页1</a-tab-pane>
    <a-tab-pane key="2" tab="标签页2">标签页2</a-tab-pane>
  </a-tabs>
</template>

<script>
  export default {
    name: 'TabsWithJudge',
    data() {
      return {
        activeKey: '1',
      }
    },
    methods: {
      handleChange(activeKey) {
        this.$message.info(`正在跳转标签页${activeKey}`)
        this.activeKey = activeKey
      },
    },
  }
</script>

<style lang="less" scoped></style>
