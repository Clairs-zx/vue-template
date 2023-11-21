<template>
  <a-table
    rowKey="(record, index)=> index"
    :dataSource="tableData"
    :columns="columns"
    :customRow="customRow"
    :pagination="false"
  >
  </a-table>
</template>

<script>
  export default {
    name: 'DraggableTable',
    data() {
      return {
        dragging: false,
        tableData: [
          {
            name: 'Kim',
            age: 12,
            address: 'beijing',
          },
          {
            name: 'Lili',
            age: 22,
            address: 'shanghai',
          },
          {
            name: 'xiaoming',
            age: 19,
            address: 'henan',
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
        sourceObj: undefined,
        sourceIndex: undefined,
      }
    },
    methods: {
      customRow(record, index) {
        return {
          props: {
            draggable: 'true',
          },
          style: {
            cursor: 'move',
          },
          on: {
            // // 鼠标移入
            mouseenter: (event) => {
              // 兼容IE
              const ev = event || window.event
              ev.target.draggable = true
            },
            // 开始拖拽
            dragstart: (event) => {
              // 兼容IE
              const ev = event || window.event
              // 阻止冒泡
              ev.stopPropagation()
              // 得到源目标数据record和index
              this.sourceObj = record
              this.sourceIndex = index
            },
            // 拖动元素经过的元素
            dragover: (event) => {
              // 兼容 IE
              const ev = event || window.event
              // 阻止默认行为
              ev.preventDefault()
            },
            // 鼠标松开
            drop: (event) => {
              // 兼容IE
              const ev = event || window.event
              // 阻止冒泡
              ev.stopPropagation()
              // 得到目标数据
              this.tableData.splice(this.sourceIndex, 1)
              this.tableData.splice(index, 0, this.sourceObj)
            },
          },
        }
      },
    },
  }
</script>

<style lang="less" scoped></style>
