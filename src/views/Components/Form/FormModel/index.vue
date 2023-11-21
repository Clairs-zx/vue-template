<template>
  <div>
    <a-divider>动态增加表单项</a-divider>
    <DynamicForm />
    <a-divider>动态增加表单项（多项）</a-divider>
    <DynamicFormWithTwoItem />
  </div>
</template>

<script>
  import DynamicForm from './components/DynamicForm.vue'
  import DynamicFormWithTwoItem from './components/DynamicFormWithTwoItem.vue'
  export default {
    components: {
      DynamicForm,
      DynamicFormWithTwoItem,
    },
  }
</script>

<style></style>
