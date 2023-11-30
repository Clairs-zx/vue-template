<template>
  <a-table
    rowKey="(record, index)=> index"
    :dataSource="tableData"
    :columns="columns"
    :pagination="false"
    :rowClassName="rowClassName"
  >
    <template slot="paramName" slot-scope="name">
      {{ name }}
    </template>
    <div slot="defaultValue" slot-scope="value, record">
      <span v-if="record.paramType === 0">{{ value }}</span>
      <a-select
        v-else
        v-model="record.defaultValue"
        mode="tags"
        style="width: 100%"
        :notFoundContent="null"
        @deselect="deselect"
      >
        <a-select-option
          v-for="(choice, index) in record.defaultChoices"
          :key="index"
          :value="choice"
          >{{ choice }}</a-select-option
        >
      </a-select>
    </div>
    <div slot="expandedRowRender" slot-scope="record">
      <div style="margin-bottom: 10px">
        <span>Patch筛选条件：</span>
        <div class="select">
          <a-select
            mode="tags"
            v-model="patchFilters"
            @change="searchTable"
            style="width: 100%"
            :getPopupContainer="(triggerNode) => triggerNode.parentNode"
          >
            <a-select-option value="status:open">status:open</a-select-option>
            <a-select-option value="status:merged"
              >status:merged</a-select-option
            >
            <a-select-option value="status:abandoned"
              >status:abandoned</a-select-option
            >
            <a-select-option value="has:draft">has:draft</a-select-option>
            <a-select-option value="project:Foo ">project:Foo </a-select-option>
          </a-select>
          <a-icon
            type="search"
            class="select-icon"
            @click="searchTable"
          ></a-icon>
        </div>
      </div>
      <a-table
        :rowKey="(record, index) => index"
        :dataSource="innerTable"
        :columns="innerColumns"
        bordered
        :pagination="false"
        :scroll="{ y: 200 }"
      >
        <template slot="index" slot-scope="innetText, innerRecord">
          {{ getCheckIndex(innerRecord) }}
        </template>
        <template slot="check" slot-scope="innerText, innerRecord">
          <a-checkbox
            v-model="innerRecord.checked"
            @change="handleCheckChange($event, record, innerRecord)"
          ></a-checkbox>
        </template>
        <template slot="v" slot-scope="text">
          <a-icon v-if="text" type="check" style="color: green"></a-icon>
          <a-icon
            v-if="text === false"
            type="close"
            style="color: red"
          ></a-icon>
        </template>
      </a-table>
    </div>
  </a-table>
</template>

<script>
  export default {
    name: 'NestedTable',
    data() {
      return {
        tableData: [
          {
            paramName: '111',
            paramType: 0,
            defaultValue: '111',
          },
          {
            paramName: '222',
            paramType: 2,
            defaultValue: ['111'],
            defaultChoices: ['111', '222'],
          },
          {
            paramName: 'APPLY_PATCH',
            paramType: 2,
            defaultValue: [],
          },
          {
            paramName: '333',
            paramType: 2,
            defaultValue: ['111'],
            defaultChoices: ['111', '222'],
          },
        ],
        columns: [
          {
            title: '变量',
            key: 'paramName',
            dataIndex: 'paramName',
            width: '40%',
            scopedSlots: { customRender: 'paramName' },
          },
          {
            title: '变量值',
            key: 'defaultValue',
            dataIndex: 'defaultValue',
            width: '60%',
            scopedSlots: { customRender: 'defaultValue' },
          },
        ],
        innerTable: [
          {
            id: 111111111111111111111111111,
            change: '20370',
            subject:
              '[hzpxc/meta-hirain-s32g]Mark bootstage for olatform and bootcomp',
            owner: '陳子陽',
            project: 'wrlinux/WRLinux-lts-21-hirain/metx-hirain-s32g',
            branch: 'wrlinux-lts-22-dev',
            updated: '23-11-21 上午 11:03',
            v: true,
            r: '-1',
            checked: false,
          },
          {
            id: 22222222222222222222222222,
            change: '20365',
            subject: '[secure]enable signclient',
            owner: '都唱',
            project: 'wrlinux/WRLinux-lts-21-hirain/metx-hirain-s32g',
            branch: 'wrlinux-lts-22-dev',
            updated: '23-11-21 上午 9:51',
            v: false,
            r: '+1',
            checked: false,
          },
          {
            id: 33333333333333333333333333,
            change: '20370',
            subject:
              '[hzpxc/meta-hirain-s32g]Mark bootstage for olatform and bootcomp',
            owner: '陳子陽',
            project: 'wrlinux/WRLinux-lts-21-hirain/metx-hirain-s32g',
            branch: 'wrlinux-lts-22-dev',
            updated: '23-11-21 上午 11:03',
            v: true,
            r: '-1',
            checked: false,
          },
          {
            id: 4444444444444444444444,
            change: '20365',
            subject: '[secure]enable signclient',
            owner: '都唱',
            project: 'wrlinux/WRLinux-lts-21-hirain/metx-hirain-s32g',
            branch: 'wrlinux-lts-22-dev',
            updated: '23-11-21 上午 9:51',
            v: false,
            r: '+1',
            checked: false,
          },
          {
            id: 55555555555555555555555,
            change: '20370',
            subject:
              '[hzpxc/meta-hirain-s32g]Mark bootstage for olatform and bootcomp',
            owner: '陳子陽',
            project: 'wrlinux/WRLinux-lts-21-hirain/metx-hirain-s32g',
            branch: 'wrlinux-lts-22-dev',
            updated: '23-11-21 上午 11:03',
            v: null,
            r: '-1',
            checked: false,
          },
          {
            id: 6666666666666666666666,
            change: '20365',
            subject: '[secure]enable signclient',
            owner: '都唱',
            project: 'wrlinux/WRLinux-lts-21-hirain/metx-hirain-s32g',
            branch: 'wrlinux-lts-22-dev',
            updated: '23-11-21 上午 9:51',
            r: '+1',
            checked: false,
          },
        ],
        innerColumns: [
          {
            key: 'index',
            width: '20px',
            align: 'center',
            scopedSlots: { customRender: 'index' },
          },
          {
            key: 'check',
            width: '30px',
            align: 'center',
            scopedSlots: { customRender: 'check' },
          },
          {
            title: 'Change',
            key: 'change',
            dataIndex: 'change',
            width: '50px',
            align: 'center',
          },
          {
            title: 'Subject',
            key: 'subject',
            dataIndex: 'subject',
          },
          {
            title: 'Owner',
            key: 'owner',
            dataIndex: 'owner',
            width: '60px',
            align: 'center',
          },
          {
            title: 'Project',
            key: 'project',
            dataIndex: 'project',
          },
          {
            title: 'Branch',
            key: 'branch',
            dataIndex: 'branch',
            width: '80px',
          },
          {
            title: 'Updated',
            key: 'updated',
            dataIndex: 'updated',
            width: '80px',
          },
          {
            title: 'V',
            key: 'v',
            dataIndex: 'v',
            width: '30px',
            align: 'center',
            scopedSlots: { customRender: 'v' },
          },
          {
            title: 'R',
            key: 'r',
            dataIndex: 'r',
            width: '30px',
            align: 'center',
            scopedSlots: { customRender: 'r' },
          },
        ],
        patchFilters: [],
        checkdIds: [],
      }
    },
    methods: {
      deselect(id) {
        const index = this.checkdIds.indexOf(id)
        this.checkdIds.splice(index, 1)
        const tableItem = this.innerTable.filter((item) => item.id === id)[0]
        tableItem.checked = false
      },
      rowClassName(record) {
        return record.paramName === 'APPLY_PATCH' ? '' : 'noExpand'
      },
      searchTable() {
        console.log(this.patchFilters)
      },
      handleCheckChange(event, record, innerRecord) {
        const id = innerRecord.id
        if (event.target.checked) {
          this.checkdIds.push(id)
          record.defaultValue.push(id)
        } else {
          this.checkdIds.splice(this.checkdIds.indexOf(id), 1)
          record.defaultValue.splice(record.defaultValue.indexOf(id), 1)
        }
      },
      getCheckIndex(innerRecord) {
        const index = this.checkdIds.indexOf(innerRecord.id)
        return index === -1 ? '' : index + 1
      },
    },
  }
</script>

<style lang="less" scoped>
  /deep/.noExpand {
    .ant-table-row-expand-icon {
      display: none;
    }
  }
  .select {
    display: inline-block;
    min-width: 200px;
    max-width: 90%;
    position: relative;
    .select-icon {
      position: absolute;
      top: 8px;
      right: 8px;
      color: #999;
      font-size: 16px;
    }
    /deep/.ant-select-selection__rendered {
      margin-right: 20px;
    }
  }
  /deep/.ant-table-expanded-row {
    background-color: #fff;
    &:hover {
      background-color: #fff;
    }
  }

  /deep/.ant-table-row-expand-icon-cell {
    padding: 0;
  }
  /deep/.ant-table-thead > tr > th {
    padding: 8px;
  }
  /deep/.ant-table-tbody > tr > td {
    padding: 4px;
  }
</style>
