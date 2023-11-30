<template>
  <div>
    <h1>行可拖拽</h1>
    <VueDraggable
      v-model="tableData"
      animation="150"
      target=".ant-table-tbody"
      @onUpdate="onUpdateRow"
    >
      <a-table
        :columns="columns"
        :dataSource="tableData"
        :rowKey="(record, index) => index"
      >
      </a-table>
    </VueDraggable>
    <h1>列可拖拽</h1>
    <VueDraggable
      v-model="tableData"
      animation="150"
      target=".ant-table-thead tr "
      @onUpdate="onUpdateCol"
    >
      <a-table
        :columns="columns"
        :dataSource="tableData"
        :rowKey="(record, index) => index"
      >
      </a-table>
    </VueDraggable>
  </div>
</template>

<script>
  import { useDraggable, VueDraggable } from 'vue-draggable-plus'

  export default {
    name: 'DraggableTable',
    components: { VueDraggable },
    data() {
      return {
        tableData: [
          {
            name: 'Kin',
            age: 19,
            address: 'Beijing',
          },
          {
            name: 'Rom',
            age: 14,
            address: 'Beijing',
          },
          {
            name: 'Jerry',
            age: 19,
            address: 'Shanghai',
          },
        ],
        columns: [
          {
            title: '姓名',
            key: 'name',
            dataIndex: 'name',
          },
          {
            title: '年龄',
            key: 'age',
            dataIndex: 'age',
          },
          {
            title: '地址',
            key: 'address',
            dataIndex: 'address',
          },
        ],
      }
    },

    methods: {
      onUpdateCol(evt) {
        const oldItem = this.columns[evt.oldIndex]
        this.columns.splice(evt.oldIndex, 1)
        this.columns.splice(evt.newIndex, 0, oldItem)
      },
      onUpdateRow() {},
    },
  }
</script>

<style lang="less" scoped>
  .sortable-ghost {
    background: #c8ebfb !important;
  }
  .sortable-drag {
    opacity: 0 !important;
  }
</style>
