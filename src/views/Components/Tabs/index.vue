<template>
  <div>
    <a-divider>tabs切换之前做判断</a-divider>
    <TabsWithJudge />
  </div>
</template>

<script>
  import TabsWithJudge from './components/TabsWithJudge.vue'
  export default {
    components: { TabsWithJudge },
  }
</script>

<style lang="less" scoped></style>
