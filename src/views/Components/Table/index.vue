<template>
  <div>
    <a-divider>动态列</a-divider>
    <TableWithDynamicColumns />
    <a-divider>自定义单元格</a-divider>
    <TableWithCustomCell />
    <a-divider>表格内嵌动态表单</a-divider>
    <TableWithDynamicForm />
    <a-divider>可拖拽的表格</a-divider>
    <DraggableTable />
    <a-divider>嵌套的表格</a-divider>
    <NestedTable />
  </div>
</template>

<script>
  import TableWithDynamicForm from './components/TableWithDynamicForm.vue'
  import TableWithDynamicColumns from './components/TableWithDynamicColumns.vue'
  import TableWithCustomCell from './components/TableWithCustomCell.vue'
  import DraggableTable from './components/DraggableTable.vue'
  import NestedTable from './components/NestedTable.vue'

  export default {
    name: 'TableComponents',
    components: {
      TableWithDynamicForm,
      TableWithDynamicColumns,
      TableWithCustomCell,
      DraggableTable,
      NestedTable,
    },
  }
</script>

<style lang="less" scoped>
  .container {
    width: 80%;
    margin: 0 auto;
  }
</style>
