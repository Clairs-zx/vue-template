<template>
  <div>
    <a-divider>单列拖拽</a-divider>
    <Simple />
    <a-divider>多列拖拽</a-divider>
    <MultipleColumns />
  </div>
</template>

<script>
  import Simple from './components/Simple.vue'
  import MultipleColumns from './components/MultipleColumns.vue'
  export default {
    components: { Simple, MultipleColumns },
  }
</script>

<style></style>
