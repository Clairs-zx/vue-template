<template>
  <a-table :columns="columns" :data-source="data">
    <template slot="patch" slot-scope="patches, record, recordIndex">
      <a-form-model ref="dynamicValidateForm" :model="record">
        <a-space
          v-for="(patch, index) in record.patches"
          :key="index"
          style="display: flex; align-items: baseline"
        >
          <a-form-model-item
            :prop="`patches.${index}.file`"
            :rules="{
              required: true,
              message: 'domain can not be null',
              trigger: ['change', 'blur'],
            }"
          >
            <a-input v-model="patch.file" addonBefore="file:" />
          </a-form-model-item>
          <a-form-model-item
            :prop="`patches.${index}.path`"
            :rules="{
              required: true,
              message: 'domain can not be null',
              trigger: ['change', 'blur'],
            }"
          >
            <a-input v-model="patch.path" addonBefore="path:" />
          </a-form-model-item>
          <a-form-model-item :prop="`patches.${index}.subname`">
            <a-input v-model="patch.subname" addonBefore="subname:" />
          </a-form-model-item>
          <a-form-model-item>
            <a-icon
              class="dynamic-delete-button"
              type="close-circle"
              @click="removeDomain(record, index)"
            />
          </a-form-model-item>
        </a-space>
        <a-form-model-item>
          <a-button
            type="dashed"
            style="width: 50%"
            @click="addDomain(record, recordIndex)"
          >
            <a-icon type="plus" /> Add field
          </a-button>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="dashed" style="width: 50%" @click="submit()">
            <a-icon type="plus" /> 提交
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </template>
  </a-table>
</template>

<script>
  const columns = [
    {
      dataIndex: 'patch',
      key: 'patch',
      title: 'patch',
      scopedSlots: { customRender: 'patch' },
    },
  ]
  const data = [
    {
      key: '1',
      patches: [
        {
          key: 0,
          file: '111',
          path: '111',
          subname: '',
        },
        {
          key: 2,
          file: '222',
          path: '222',
          subname: '',
        },
      ],
    },
  ]
  export default {
    name: 'TableWithDynamicForm',
    data() {
      return {
        data,
        columns,
      }
    },
    methods: {
      removeDomain(record, index) {
        record.patches.splice(index, 1)

        this.$nextTick(() => {
          this.$refs.dynamicValidateForm.validate(() => {})
        })
      },
      addDomain(record, recordIndex) {
        record.patches.push({
          key: Date.now(),
          file: '',
          path: '',
          subname: '',
        })
      },
      submit() {
        console.log(this.data)
      },
    },
  }
</script>
<style lang="less" scoped></style>
