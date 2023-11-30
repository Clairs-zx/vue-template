<template>
  <div>
    <a-divider>多选</a-divider>
    <MultipleSelector />
    <a-divider>allowClear配置</a-divider>
    <span style="display: inline-block; margin-bottom: 10px"
      >单项选择器点击清除按钮会变成undefined，多选和标签选择器点击清除按钮会变成空数组</span
    >
    <TagsSelector />
  </div>
</template>

<script>
  import MultipleSelector from './components/MultipleSelector.vue'
  import TagsSelector from './components/TagsSelector.vue'
  export default {
    components: { MultipleSelector, TagsSelector },
  }
</script>

<style></style>
