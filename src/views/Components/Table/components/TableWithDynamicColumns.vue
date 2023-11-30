<template>
  <div>
    <a-popover placement="bottomLeft" style="margin-bottom: 10px">
      <a-checkbox
        slot="title"
        style="margin: 5px 0"
        :indeterminate="indeterminate"
        :checked="checkAll"
        @change="onCheckAllChange"
        >全选</a-checkbox
      >
      <template slot="content">
        <a-checkbox-group v-model="checkedList" @change="onChange">
          <a-row
            v-for="(item, index) in plainOptions"
            :key="index"
            style="margin-bottom: 5px"
          >
            <a-checkbox :value="item"> {{ item }}</a-checkbox>
          </a-row>
        </a-checkbox-group>
      </template>
      <a-button type="primary">列表设置</a-button>
    </a-popover>
    <a-table :columns="columns" :dataSource="tableData"></a-table>
  </div>
</template>

<script>
  const defaultColumns = [
    {
      title: 'name',
      key: 'name',
      dataIndex: 'name',
      width: 100,
    },
    {
      title: 'age',
      key: 'age',
      dataIndex: 'age',
      width: 100,
    },
    {
      title: 'address',
      key: 'address',
      dataIndex: 'address',
      width: 300,
    },
  ]
  const tableData = [
    {
      key: 0,
      name: 'Tom',
      age: 19,
      address: 'beijing',
    },
    {
      key: 1,
      name: 'Jerry',
      age: 20,
      address: 'tianjin',
    },
    {
      key: 3,
      name: 'John',
      age: 22,
      address: 'shanghai',
    },
  ]
  export default {
    name: 'TableWithDynamicColumns',
    data() {
      return {
        visible: false,
        plainOptions: ['name', 'age', 'address'],
        checkedList: ['name', 'age', 'address'],
        indeterminate: false,
        checkAll: true,
        columns: defaultColumns,
        tableData,
      }
    },
    watch: {
      checkedList(checkedKey) {
        this.columns = defaultColumns.filter((item) =>
          checkedKey.includes(item.key)
        )
      },
    },

    methods: {
      onChange(checkedList) {
        this.indeterminate =
          !!checkedList.length && checkedList.length < this.plainOptions.length
        this.checkAll = checkedList.length === this.plainOptions.length
      },
      onCheckAllChange(e) {
        Object.assign(this, {
          checkedList: e.target.checked ? this.plainOptions : [],
          indeterminate: false,
          checkAll: e.target.checked,
        })
      },
    },
  }
</script>

<style lang="less" scoped></style>
