<template>
  <a-table
    :columns="columns"
    :dataSource="tableData"
    :rowKey="(record, index) => index"
  >
  </a-table>
</template>

<script>
  import Sortable from 'sortablejs'

  export default {
    name: 'DraggableTable',
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
    mounted() {
      const row = document.querySelector('.ant-table-tbody')
      const col = document.querySelector('.ant-table-thead tr')
      Sortable.create(row, {
        name: 'row',
        animation: 150,
        ghostClass: 'sortable-ghost', // drop placeholder的css类名
        dragClass: 'sortable-drag', // 正在被拖拽中的css类名
      })
      Sortable.create(col, {
        name: 'col',
        animation: 150,
        ghostClass: 'sortable-ghost', // drop placeholder的css类名
        dragClass: 'sortable-drag', // 正在被拖拽中的css类名
        onEnd: (evt) => {
          const oldItem = this.columns[evt.oldIndex]
          this.columns.splice(evt.oldIndex, 1)
          this.columns.splice(evt.newIndex, 0, oldItem)
        },
      })
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
