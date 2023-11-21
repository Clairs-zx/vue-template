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
    name: 'TableExample',
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
      }
    },
  }
</script>

<style lang="less" scoped></style>
