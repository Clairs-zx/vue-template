<template>
  <div>
    <!-- <a-divider>单列拖拽</a-divider>
    <DraggableSingleList />
    <a-divider>多列拖拽</a-divider>
    <DraggableMultipleList /> -->
    <a-divider>表格拖拽</a-divider>
    <DraggableTable />
    <a-divider>动态表单项拖拽</a-divider>
    <DraggableDynamicForm />
  </div>
</template>

<script>
  //   import DraggableSingleList from './components/DraggableSingleList.vue'
  // import DraggableMultipleList from './components/DraggableMultipleList.vue'
  import DraggableTable from './components/DraggableTable.vue'
  import DraggableDynamicForm from './components/DraggableDynamicForm.vue'
  export default {
    components: {
      //   DraggableSingleList,
      //   DraggableMultipleList,
      DraggableTable,
      DraggableDynamicForm,
    },
  }
</script>

<style lang="less" scoped></style>
